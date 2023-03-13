import { Gender } from 'src/app.types';

export class UpdateElephantDto {
  id: string;
  name: string;
  trunkLength: number;
  gender: Gender;
}
