import { UserRole } from '../entities/user.role';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
