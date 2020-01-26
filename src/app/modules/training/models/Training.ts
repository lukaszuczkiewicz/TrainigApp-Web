import { IRunner } from '../../runners/models/IRunner';

export class Training {
  trainingId: string;
  runner: IRunner;
  dateToDo: string;
  details: string;
  comments: string;
  isDone: boolean;
}