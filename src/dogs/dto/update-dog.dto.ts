import { Gender } from 'src/app.types';

export class UpdateDogDto {
  id: string;
  name: string;
  breed: string;
  gender: Gender;
  ownerId?: string;
}
