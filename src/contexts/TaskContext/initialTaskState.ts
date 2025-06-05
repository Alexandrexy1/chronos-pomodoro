import { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: "00:00",
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 0.1,
        shortBreakTime: 0.1,
        longBreakTime: 0.1,
    },
};
