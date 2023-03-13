import { Gender } from 'src/app.types';

export interface Elephant {
  name: string;
  gender: Gender;
  trunkLength: number;
  ownerId?: string;
}
