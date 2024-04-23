export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath: string;
  friends: string[];
  location: string;
  occupation: string;
  vk: string;
  viewedProfile: number;
  impressions: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
