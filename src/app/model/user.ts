import {Subscription} from './subscription';

export class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  createAt: Date;
  subscription: Subscription;
}
