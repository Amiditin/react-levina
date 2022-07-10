import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';

import { loginValidation, registerValidation, postCreateValidation } from './utils/validations';
import { checkAuth, handleValidationErrors } from './utils';
import { UserController, PostController } from './controllers/index';

mongoose
  .connect(
    'mongodb+srv://admin:c8mmIKIpI0902h7J@cluster0.nm9a3.mongodb.net/blog?retryWrites=true&w=majority',
  )
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error', err));

const PORT = 3001;
const app = express();
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.get('/auth/user', checkAuth, UserController.getUser);
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({ url: `/uploads/${req.file?.originalname}` });
});

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, handleValidationErrors, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch(
  '/posts/:id',
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update,
);

app.listen(PORT, () => {
  console.log('Server launched successfully on port ' + PORT);
});
