export interface userType {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  salt: string;
  role?: string | null;
  fieldInterested?: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}
