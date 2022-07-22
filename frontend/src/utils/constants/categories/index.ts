import { ICategory } from './types';

export const styles: ICategory = {
  name: 'Стиль',
  list: [
    { id: 0, name: 'Современная коллекция' },
    { id: 1, name: 'Городская классика' },
    { id: 2, name: 'Классика' },
  ],
};

export const coatings: ICategory = {
  name: 'Покрытие',
  list: [
    { id: 0, name: 'Глянцевые' },
    { id: 1, name: 'Имитация дерева' },
    { id: 2, name: 'Имитация камня' },
    { id: 3, name: 'Имитация металла' },
    { id: 4, name: 'Матовые' },
  ],
};

export const decors: ICategory = {
  name: 'Декор',
  list: [
    { id: 0, name: 'Балюстрады' },
    { id: 1, name: 'Витражи' },
    { id: 2, name: 'Карнизы' },
    { id: 3, name: 'Колонны' },
    { id: 4, name: 'Открытые секции' },
    { id: 5, name: 'Портал' },
    { id: 6, name: 'Подзоры' },
    { id: 7, name: 'Пилястры' },
    { id: 8, name: 'Фрезеровки' },
  ],
};
