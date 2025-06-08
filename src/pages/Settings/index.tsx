
import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SaveIcon } from "lucide-react";
import { FormEvent, useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { toastifyWrapper } from "../../adapters/toastifyWrapper";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";


export function Settings() {
    const { state, dispatch } = useTaskContext();

    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.title = 'Configurações - Chronos Pomodoro';
      }, []);
    
    
    function handleSaveSettings(event: FormEvent) {
        event.preventDefault();

        toastifyWrapper.dismiss();

        const workTime = Number(workTimeInput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            toastifyWrapper.error("Digite apenas números para os campos");
            return;
        }

        if (isInvalidTime(workTime) || isInvalidTime(shortBreakTime) || isInvalidTime(longBreakTime)) {
                toastifyWrapper.error("Digite apenas valores entre 1 e 99");
            return;
        }
        dispatch({ 
            type: TaskActionTypes.CHANGE_SETTINGS, payload: {
                workTime,
                shortBreakTime,
                longBreakTime
            },
        });

        toastifyWrapper.success("Configurações salvas");
    }

    function isInvalidTime(value: number) {
        return value < 1 || value > 99;
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>
                    Modifique as configurações para tempo de foco, tempo de descanso curto e tempo de descanso longo
                </p>
            </Container>
            <Container>
                <form onSubmit={handleSaveSettings} action="" className="form">
                    <div className="formRow">
                        <Input 
                            id="workTime" 
                            type="number" 
                            labelText="Foco" 
                            ref={workTimeInput} 
                            defaultValue={state.config.workTime}
                        />
                    </div>
                    <div className="formRow">
                        <Input 
                            id="shortBreakTime" 
                            type="number" 
                            labelText="Descanso curto" 
                            ref={shortBreakTimeInput}
                            defaultValue={state.config.shortBreakTime}
                        />
                    </div>
                    <div className="formRow">
                        <Input 
                            id="longBreakTime" 
                            type="number" 
                            labelText="Descanso longo" 
                            ref={longBreakTimeInput} 
                            defaultValue={state.config.longBreakTime}
                        />
                    </div>
                    <div className="formRow">
                        <Button 
                            icon={<SaveIcon />} 
                            aria-label="Salvar configurações" 
                            title="Salvar configurações" 
                        />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    );
}