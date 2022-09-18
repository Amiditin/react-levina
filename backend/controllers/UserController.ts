import express from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/User';

export const getUser = async (req: any, res: express.Response) => {
  try {
    const user: any = await UserModel.findById(req.userId);

    if (!user) return res.status(404).json({ message: 'User not found' });

    const { passwordHash, ...userData } = user._doc;

    const token = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '30d' });

    res.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get user' });
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const user: any = await UserModel.findOne({ email: req.body.email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isValidPassword = await bcrypt.compare(req.body.password, user._doc.passwordHash);

    if (!isValidPassword) res.status(400).json({ message: 'Unccorect login or password ' });

    const { passwordHash, ...userData } = user._doc;

    const token = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '30d' });

    res.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to login user' });
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      fullName: req.body.fullName,
      email: req.body.email,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const user: any = await doc.save();

    const { passwordHash, ...userData } = user._doc;

    const token = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '30d' });

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to register user' });
  }
};
