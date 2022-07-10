import mongoose, { Schema, model, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
  user: mongoose.Schema.Types.ObjectId;
  imageUrl?: string;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    tags: { type: [{ type: String }], default: [] },
    viewsCount: { type: Number, default: 0 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    imageUrl: String,
  },
  { timestamps: true },
);

export default model<IPost>('Post', PostSchema);
