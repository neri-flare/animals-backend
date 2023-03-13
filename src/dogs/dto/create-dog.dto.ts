import { Gender } from 'src/app.types';

export class CreateDogDto {
  name: string;
  breed: string;
  gender: Gender;
  ownerId?: string;
}
