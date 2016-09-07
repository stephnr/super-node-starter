import * as sequelize from 'sequelize';

export interface UserPojo {
  email: string;
  password: string;
  token: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

export interface UserInstance extends sequelize.Instance<UserPojo>, UserPojo { }
