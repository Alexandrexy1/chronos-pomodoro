
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

export function History() {
    const { state } = useTaskContext();

    const sortedTask = [...state.tasks].sort((a, b) => {
        return b.startDate - a.startDate;
    });

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles.buttonContainer}>
                        <Button 
                            icon={ <TrashIcon/ > } 
                            color="red" 
                            aria-label="apagar todo o histórico"
                            title="apagar todo o histórico"
                        />
                    </span>       
                </Heading>
            </Container>
            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedTask.map((task: TaskModel) => {
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
            </Container>
        </MainTemplate>
    );
}
