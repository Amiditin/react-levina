export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export interface PostsState {
  items: IPostTemp[] | null;
  status: Status;
}

type Coating = 'Глянцевые' | 'Имитация дерева' | 'Имитация камня' | 'Имитация металла' | 'Матовые';

type Decor =
  | 'Балюстрады'
  | 'Витражи'
  | 'Карнизы'
  | 'Колонны'
  | 'Открытые секции'
  | 'Портал'
  | 'Подзоры'
  | 'Пилястры'
  | 'Фрезеровки';

type Comment = {
  author: string;
  text: string;
  date: string;
  avatar: string;
  authorUid: string;
};

export interface IPostTemp {
  author: string;
  authorUid: string;
  comments: Comment[];
  date: string;
  id: string;
  name: string;
  text: string;
  title: string;
  images: string[];
  coatings: Coating[];
  decor: Decor[];
  style: 'Классика' | 'Городская классика' | 'Современная коллекция';
}
