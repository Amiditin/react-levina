import { PostCoating, PostDecor, PostStyle } from '../../../redux/posts/types';
export interface ICategoryCoating {
  name: 'Покрытие';
  list: {
    id: number;
    name: PostCoating;
  }[];
}
export interface ICategoryDecor {
  name: 'Декор';
  list: {
    id: number;
    name: PostDecor;
  }[];
}
export interface ICategoryStyle {
  name: 'Стиль';
  list: {
    id: number;
    name: PostStyle;
  }[];
}
