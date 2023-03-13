import { Gender } from 'src/app.types';

export class CreateOwnerDto {
  name: string;
  gender: Gender;
  age?: number;
}
