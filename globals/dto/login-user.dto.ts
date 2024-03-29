import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { LoginUserRequest } from "../interfaces/auth";

export class LoginUserDto implements LoginUserRequest {
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
