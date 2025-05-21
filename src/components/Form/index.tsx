import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { Button } from "../Button";

import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { FormEvent, useRef } from "react";

export function Form() {
    const taskNameInput = useRef<HTMLInputElement>(null) as React.RefObject<HTMLInputElement>;

    function handleStartNewTask(event: FormEvent<HTMLFormElement>) {
        console.log(taskNameInput.current.value);
        event.preventDefault();
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