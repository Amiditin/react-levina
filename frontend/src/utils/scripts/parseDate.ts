import { months } from '../constants';

// string для поддержки старых данных year.month.day.house.minute | потом убрать
type DateParams = Date | string;

export const parseDate = (dateParams: DateParams): string => {
  let day: number, month, year: number, hours: number, minutes: number;

  if (typeof dateParams == 'string') {
    const date = dateParams.split('.').map(Number);

    day = date[2];
    month = months[date[1]];
    year = date[0];
    hours = date[3];
    minutes = date[4];
  } else {
    const date = new Date(dateParams);

    day = date.getDate();
    month = months[date.getMonth()];
    year = date.getFullYear();
    hours = date.getHours();
    minutes = date.getMinutes();
  }

  return `${day} ${month} ${year} в ${hours}:${minutes}`;
};

// Функция без типа string
// export const parseDate = (dateParams: Date): string => {
//   const date = new Date(dateParams);

//   const day = date.getDate();
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();

//   return `${day} ${month} ${year} в ${hours}:${minutes}`;
// };
