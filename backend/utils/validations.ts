import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
  body('fullName', 'Full name must be at least 3 character').isLength({ min: 3 }),
  body('avatarUrl', 'Invalid Avatar URL format').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Titel must be at least 3 characters').isLength({ min: 3 }).isString(),
  body('text', 'Text must be at least 3 characters').isLength({ min: 3 }).isString(),
  body('tags', 'Invalid tags format').optional().isString(),
  body('imageUrl', 'Invalid Image URL format').optional().isString(),
];
