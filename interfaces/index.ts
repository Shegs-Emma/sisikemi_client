export interface UserDocument {
  _id: string;
  name: string;
  token: string;
  profilePicture: string;
  email: string;
  hash: string;
  hashRt?: string;
  isAdmin: boolean;
  isCreator: boolean;
}
