import { Owner } from 'src/owners/models/owner.model';

export interface Cat {
  name: string;
  color: string;
  ownerId?: string;
}
