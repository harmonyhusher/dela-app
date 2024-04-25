export interface IPost {
  _id: number;
  userId: string;
  firstName: string;
  lastName: string;
  location?: string;
  createdAt?: string;
  description?: string;
  likes: Map<string, boolean>;
  comments: Comment[];
}

export interface Comment {
  firstName: string;
  lastName: string;
  picturePath?: string;
  text: string;
  createdAt: Date;
}
