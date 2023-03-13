import { Gender } from 'src/app.types';

export class UpdateOwnerDto {
  id: string;
  name: string;
  gender: Gender;
  age: number;
}
