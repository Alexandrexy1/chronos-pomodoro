import { TaskModel } from "./TaskModel"

export interface TaskStateModel {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaing: string;
}