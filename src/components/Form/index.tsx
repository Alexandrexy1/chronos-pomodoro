import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { Button } from "../Button";

import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { FormEvent, useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/FormatSecondsToMinutes";

export function Form() {
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null) as React.RefObject<HTMLInputElement>;
    
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleStartNewTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert("nome da task vazia");
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

        const secondsRemaining = newTask.durationInMinutes * 60;

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaing: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
            }
        })
    }

    return (
        <form onSubmit={handleStartNewTask} action="" className="form">
            <div className="formRow">
                <Input 
                    type="text" 
                    id="myInput" 
                    placeholder="Defina um horário"
                    ref={taskNameInput}
                />
            </div>
            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <Cycles/>
            <div className="formRow">
                <Button icon={<PlayCircleIcon />} />
                <Button icon={<StopCircleIcon />} color="red" />
            </div>
        </form>
    )
}