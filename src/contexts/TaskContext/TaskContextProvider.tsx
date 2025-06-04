import { PropsWithChildren, useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimeWorkerManager } from "../../workers/TimeWorkerManager";
import { TaskActionTypes } from "./taskActions";

export function TaskContextProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    const worker = TimeWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDownSeconds = e.data;
        console.log(countDownSeconds);

        dispatch({
            type: TaskActionTypes.COUNT_DOWN,
            payload: { secondsRemaining: countDownSeconds }
        })
        if (countDownSeconds <= 0) {
            worker.terminate();
        }
    });

    useEffect(() => {
        if (!state.activeTask) {
            console.log("Worker terminado por falta de tarefa ativa");
            worker.terminate();      
        }
        worker.postMessage(state);
    }, [state, worker])
    return <TaskContext.Provider value={{ state, dispatch }}>
        { children }
    </TaskContext.Provider>
}