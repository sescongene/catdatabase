import { Breed } from './breed.model';

export interface Cat {
  id?: number;
  name: string;
  color: string;
  breed: string;
  description?: string;
  dateOfBirth: Date;
}
