import { TaskModel } from "../models/TaskModel";

export function taskTypeDictionary(task: TaskModel) {
    if (task.type === "workTime") return "Foco";
    if (task.type === "shortBreakTime") return "Descanso curto";
    return "Descanso longo";
}