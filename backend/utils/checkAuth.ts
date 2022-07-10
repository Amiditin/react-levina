import express from 'express';
import jwt from 'jsonwebtoken';

export default (req: any, res: express.Response, next: express.NextFunction) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded: any = jwt.verify(token, 'secret');

      req.userId = decoded._id;
      next();
    } catch (error) {
      return res.status(403).json({ message: 'No access' });
    }
  } else {
    return res.status(403).json({ message: 'No access' });
  }
};
