export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export interface PostsState {
  items: IPostTemp[] | null;
  status: Status;
}

type PostCoating =
  | 'Глянцевые'
  | 'Имитация дерева'
  | 'Имитация камня'
  | 'Имитация металла'
  | 'Матовые';

type PostDecor =
  | 'Балюстрады'
  | 'Витражи'
  | 'Карнизы'
  | 'Колонны'
  | 'Открытые секции'
  | 'Портал'
  | 'Подзоры'
  | 'Пилястры'
  | 'Фрезеровки';

export type PostStyle = 'Классика' | 'Городская классика' | 'Современная коллекция';

type PostComment = {
  author: string;
  text: string;
  date: string;
  avatar: string;
  authorUid: string;
};

export interface IPostTemp {
  author: string;
  authorUid: string;
  comments: PostComment[];
  date: string;
  id: string;
  name: string;
  text: string;
  title: string;
  images: string[];
  coatings: PostCoating[];
  decor: PostDecor[];
  style: PostStyle;
}
