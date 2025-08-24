export type UserStatus = 'active' | 'inactive' | 'suspended' | 'deleted';

export class UserModel {
  id!: string;

  email!: string;

  name!: string;

  status!: UserStatus;
}
