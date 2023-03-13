import { Gender } from 'src/app.types';

export class CreateElephantDto {
  name: string;
  gender: Gender;
  trunkLength: number;
}
