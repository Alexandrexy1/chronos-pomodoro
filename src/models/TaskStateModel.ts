import { TaskModel } from "./TaskModel"

export interface TaskStateModel {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaing: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}