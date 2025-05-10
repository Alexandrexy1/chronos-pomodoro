import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { Button } from "../Button";

import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

export function Form() {
    return (
        <form action="" className="form">
            <div className="formRow">
                <Input type="text" id="myInput" placeholder="Defina um horário" />
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