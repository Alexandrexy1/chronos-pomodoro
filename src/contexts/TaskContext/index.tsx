import { createContext, PropsWithChildren, useContext } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaing: "00:00",
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
};

export const TaskContext = createContext({
    key: "value",
});

export function TaskContextProvider({ children }: PropsWithChildren) {
    return <TaskContext.Provider value={{algo: "assim"}}>{ children }</TaskContext.Provider>
}

export function useTaskContext() {
    return useContext(TaskContext);
}