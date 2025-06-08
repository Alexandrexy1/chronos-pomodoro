
import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { TrashIcon } from "lucide-react";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskModel } from "../../models/TaskModel";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { taskTypeDictionary } from "../../utils/taskTypeDictionary";
import { useEffect, useState } from "react";
import { sortTasks, SortTasksOptions } from "../../utils/sortTasks";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { toastifyWrapper } from "../../adapters/toastifyWrapper";

export function History() {
    const { state, dispatch } = useTaskContext();
    const [confirmClearHistory, setConfirmClearHistory] = useState(false);

    const hasTasks = state.tasks.length > 0;

    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
        () => {
            return {
                tasks: sortTasks({ tasks: state.tasks }),
                field: "startDate",
                direction: "desc",
            };
        }
    );

    useEffect(() => {
    document.title = 'Histórico - Chronos Pomodoro';
    }, []);


    useEffect(() => {
        setSortTasksOptions(prevState => ({
            ...prevState,
            tasks: sortTasks({
                tasks: state.tasks,
                direction: prevState.direction,
                field: prevState.field,
            })
        }))
    }, [state.tasks]);

    useEffect(() => {
        if(!confirmClearHistory) return;
        
        setConfirmClearHistory(false);

        dispatch({ type: TaskActionTypes.RESET_STATE });
    }, [dispatch, confirmClearHistory])

    useEffect(() => {
        return () => {
            toastifyWrapper.dismiss();
        }
    }, []);

    function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
        const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";

        setSortTasksOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTasksOptions.tasks,
                field,
            }),
            direction: newDirection,
            field
        });
    }

    function handleResetHistory() {
        toastifyWrapper.confirm('Tem certeza', (confirmation) => {
            setConfirmClearHistory(confirmation);
        })
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    { hasTasks && (
                        <span className={styles.buttonContainer}>
                            <Button 
                                icon={ <TrashIcon/ > } 
                                color="red" 
                                aria-label="apagar todo o histórico"
                                title="apagar todo o histórico"
                                onClick={handleResetHistory}
                            />
                        </span>       
                    )}

                </Heading>
            </Container>
            <Container>
                {hasTasks && (
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={() => handleSortTasks({field: "name"})}>Tarefa</th>
                                    <th onClick={() => handleSortTasks({field: "durationInMinutes"})}>Duração</th>
                                    <th onClick={() => handleSortTasks({field: "startDate"})}>Data</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortTasksOptions.tasks.map((task: TaskModel) => {
                                    return(
                                        <tr key={task.id}>
                                            <td>{ task.name }</td>
                                            <td>{ task.durationInMinutes }min</td>
                                            <td>{ formatDate(task.startDate) }</td>
                                            <td>{ getTaskStatus(task, state.activeTask) }</td>
                                            <td>{ taskTypeDictionary(task) }</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                )}
                {!hasTasks && (
                    <p style={{ textAlign: "center", fontWeight: "bold"}}>
                        Ainda não foram criadas novas tarefas.
                    </p>
                )}
            </Container>
        </MainTemplate>
    );
}
