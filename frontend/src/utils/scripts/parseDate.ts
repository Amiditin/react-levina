import { months } from '../constants';

export const parseDate = (dateParams: Date): string => {
  const date = new Date(dateParams);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${month} ${year} в ${hours}:${minutes}`;
};
