import { PropsWithChildren, useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

export function TaskContextProvider({ children }: PropsWithChildren) {
    const [state, setState] = useState(initialTaskState);

    useEffect(() => {
        console.log(state);
    }, [state])
    return <TaskContext.Provider value={{ state, setState }}>
        { children }
    </TaskContext.Provider>
}