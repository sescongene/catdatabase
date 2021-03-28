type gender = 'male' | 'female';

interface Cat {
  id?: number;
  name: string;
  gender: gender;
  color: string;
  breed: string;
  description?: string;
  dateOfBirth: Date;
}

interface CatState {
  list: Cats;
  loading: boolean;
  filters?: string[];
}
