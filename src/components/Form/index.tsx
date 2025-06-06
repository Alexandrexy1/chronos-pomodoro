import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { Button } from "../Button";

import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { FormEvent, useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { toastifyWrapper } from "../../adapters/toastifyWrapper";

export function Form() {
    const { state, dispatch } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null) as React.RefObject<HTMLInputElement>;
    const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";
    
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleStartNewTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        toastifyWrapper.dismiss();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            toastifyWrapper.warn("nome da task vazia");
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            endDate: null,
            interruptDate: null,
            durationInMinutes: state.config[nextCycleType],
            type: nextCycleType,
        }

        dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
        toastifyWrapper.success("Tarefa iniciada");
    }

    function handleInterruptTask() {
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK});
        toastifyWrapper.error("Tarefa interrompida");
        }

    return (
        <form onSubmit={handleStartNewTask} action="" className="form">
            <div className="formRow">
                <Input 
                    type="text" 
                    id="myInput" 
                    placeholder="Defina um nome"
                    ref={taskNameInput}
                    disabled={state.activeTask?.type === "workTime" ? true : false}
                    defaultValue={lastTaskName}
                />
            </div>
            <div className="formRow">
                <Tips/>
            </div>
            {
                state.currentCycle > 0 && (
                    <div className="formRow">
                        <Cycles/>
                    </div>
                )
            }
            <div className="formRow">
                { !state.activeTask && (
                    <Button 
                        icon={<PlayCircleIcon />} 
                        type="submit"
                    /> 
                )
                }

                { state.activeTask && (
                    <Button 
                        icon={<StopCircleIcon />} 
                        color="red"
                        type="button"
                        onClick={handleInterruptTask} 
                    />
                )
                }
            </div>
        </form>
    )
}