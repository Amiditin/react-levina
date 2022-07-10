import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  fullName: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string;
}

const UserSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    avatarUrl: String,
  },
  { timestamps: true },
);

export default model<IUser>('User', UserSchema);
