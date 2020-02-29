import { IRunner } from '../../runners/models/IRunner';

export class Training {
  id: string;
  runner: IRunner;
  dateToDo: string;
  details: string;
  comments: string;
  isDone: boolean;
}