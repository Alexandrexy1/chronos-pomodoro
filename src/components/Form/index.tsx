import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { Button } from "../Button";

import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { FormEvent, useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Form() {
    const { setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null) as React.RefObject<HTMLInputElement>;

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
            durationInMinutes: 1,
            type: "workTime"
        }

        const secondsRemaining = newTask.durationInMinutes * 60;

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: 1,
                secondsRemaining,
                formattedSecondsRemaing: "00:00",
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