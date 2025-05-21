import { createContext, Dispatch, SetStateAction } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

interface TaskContextProps {
    state: TaskStateModel,
    setState: Dispatch<SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
    state: initialTaskState,
    setState: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
