import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  // Example password rules: min 8, includes letter+number. Adjust as needed.
  @IsNotEmpty()
  @Length(8, 128)
  @Matches(/(?=.*[A-Za-z])(?=.*\d).+/, {
    message: 'password must contain at least one letter and one number',
  })
  password: string;
}
