import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    // ValidationPipe (global) will validate DTO
    const user = await this.usersService.create(createUserDto);
    // Return 201 with created user (without password)
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User registered successfully.',
      data: user,
    };
  }
}
