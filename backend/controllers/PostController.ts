import express from 'express';
import { CallbackError, Types } from 'mongoose';
import PostModel, { IPost } from '../models/Post';

export const getAll = async (req: express.Request, res: express.Response) => {
  try {
    const posts = await PostModel.find().populate('user').exec();

    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get posts' });
  }
};

export const getOne = (req: express.Request, res: express.Response) => {
  try {
    const postId = req.params.id;
    PostModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { viewsCount: 1 } },
      { returnDocument: 'after' },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'Failed to get post' });
        }

        if (!doc) return res.status(404).json({ message: 'Post not found' });

        res.json(doc);
      },
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get posts' });
  }
};

export const create = async (req: any, res: express.Response) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      tags: req.body.tags,
      user: req.userId,
      imageUrl: req.body.imageUrl,
    });

    const post = await doc.save();

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to create post' });
  }
};

export const remove = (req: express.Request, res: express.Response) => {
  try {
    const postId = req.params.id;
    PostModel.findOneAndDelete(
      { _id: postId },
      (err: CallbackError, doc: (IPost & { _id: Types.ObjectId }) | null) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'Failed to delete post' });
        }

        if (!doc) return res.status(404).json({ message: 'Post not found' });

        res.json({ success: true });
      },
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete posts' });
  }
};

export const update = async (req: any, res: express.Response) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      { _id: postId },
      {
        title: req.body.title,
        text: req.body.text,
        tags: req.body.tags,
        user: req.userId,
        imageUrl: req.body.imageUrl,
      },
    );

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get posts' });
  }
};
