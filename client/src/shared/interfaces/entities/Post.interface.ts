export interface IPost {
  userId: string;
  firstName: string;
  lastName: string;
  location?: string;
  date?: string;
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