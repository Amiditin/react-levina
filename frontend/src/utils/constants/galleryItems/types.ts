import { PostStyle } from '../../../redux/posts/types';

export interface GalleryItem {
  id: number;
  imgUrl: string;
  link: string;
  title: string;
  style: PostStyle;
}
