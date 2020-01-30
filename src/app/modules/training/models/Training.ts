import { IRunner } from '../../runners/models/IRunner';

export class Training {
  trainingId: string;
  runner: IRunner;
  timeToDo: string;
  details: string;
  comments: string;
  isDone: boolean;
}