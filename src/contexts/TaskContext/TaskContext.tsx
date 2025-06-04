import { createContext, Dispatch } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskActionModel } from "./taskActions";

interface TaskContextProps {
    state: TaskStateModel,
    dispatch: Dispatch<TaskActionModel>;
}

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
