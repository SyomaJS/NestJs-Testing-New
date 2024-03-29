import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateUserRequest } from '../interfaces/auth';

export class SignUpUserDto implements CreateUserRequest {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(55)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(55)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  login: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(25)
  password: string;
}
