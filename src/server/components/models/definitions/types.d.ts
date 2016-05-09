import * as sequelize from 'sequelize';

export interface UserPojo {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  token: string;
}

export interface UserInstance extends sequelize.Instance<UserPojo, UserPojo>, UserPojo { }
