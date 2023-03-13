import { Gender } from 'src/app.types';

export interface Dog {
  name: string;
  breed: string;
  gender: Gender;
  ownerId?: string;
}
