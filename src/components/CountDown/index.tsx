import { useTaskContext } from "../../contexts/TaskContext";
import styles from  "./styles.module.css";

export function CountDown() {
    const { state } = useTaskContext();
    
    return (
        <div className={ styles.countDown }>
            00:00
        </div>
    )
}
