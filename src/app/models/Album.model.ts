import { Artist } from './Artist.model';

export interface Album {
  id: number;
  artist?: Artist;
  title: string;
  link?: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  release_date?: string;
  tracklist: string;
  type: string;
}
