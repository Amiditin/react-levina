import { IChoiceCompany } from './types';

export const choiceCompany: IChoiceCompany[] = [
  {
    imgUrl: '/img/icons/choice-company/lock.svg',
    name: 'Надежность',
    text: 'Поскольку «кухонный вопрос» действительно не из дешевых, лучше выбрать организацию, которая может предоставить гарантии на работы. Можно спросить совета родственников,коллег и знакомых.',
    type: 'reliability',
  },
  {
    imgUrl: '/img/icons/choice-company/moneybag.svg',
    name: 'Стоимость',
    text: 'Найти кухню по комфортной цене можно даже в известной федеральной сети мебельных студий. Некоторые дают скидки именинникам и запускают распродажи старых коллекций.',
    type: 'сost',
  },
  {
    imgUrl: '/img/icons/choice-company/geography.svg',
    name: 'География',
    text: 'Не все нюансы можно решать удаленно, поэтому следует выбирать компанию, чьи офисы находятся ближе к дому.',
    type: 'geography',
  },
];
