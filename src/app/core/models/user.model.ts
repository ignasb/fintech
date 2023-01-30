export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  joinedDate: string;
  photoUrl: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}
