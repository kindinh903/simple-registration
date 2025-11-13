import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  private saltRounds: number;

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private configService: ConfigService,
  ) {
    const rounds = parseInt(this.configService.get<string>('BCRYPT_SALT_ROUNDS') ?? '12', 10);
    this.saltRounds = Number.isNaN(rounds) ? 12 : rounds;
  }

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    // check if exists
    const existing = await this.userModel.findOne({ email: email.toLowerCase().trim() }).exec();
    if (existing) {
      throw new ConflictException('Email is already registered.');
    }

    // hash password
    let hashed: string;
    try {
      hashed = await bcrypt.hash(password, this.saltRounds);
    } catch (err) {
      throw new InternalServerErrorException('Error hashing password.');
    }

    // create
    const created = new this.userModel({
      email: email.toLowerCase().trim(),
      password: hashed,
    });

    try {
      const saved = await created.save();
      // remove password before returning
      const { password, ...result } = saved.toObject();
      return result;
    } catch (err: any) {
      // handle duplicate key race (index-level)
      if (err.code === 11000) {
        throw new ConflictException('Email is already registered (duplicate).');
      }
      throw new InternalServerErrorException('Could not create user.');
    }
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email: email.toLowerCase().trim() }).exec();
  }

  async getById(id: string) {
    const user = await this.userModel.findById(id).select('-password').exec();
    if (!user) throw new NotFoundException('User not found.');
    return user;
  }
}
