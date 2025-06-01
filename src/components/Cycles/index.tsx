import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
    const { state } = useTaskContext();
    
    const arrayCycle = Array(state.currentCycle).fill(null);

    const cycleDescriptionMap = {
        workTime: "foco",
        shortBreakTime: "descanso curto",
        longBreakTime: "descanso longo"
    }

    return (
        <div className={ styles.cycles }>
            <span>Ciclos:</span>
            <div className={ styles.cycleDots }>
                {
                    arrayCycle.map((_, index) => {
                        const nextCycle = getNextCycle(index);
                        const nextCycleType = getNextCycleType(nextCycle);
                        return (
                            <span 
                                key={`${nextCycleType}_${nextCycle}`}
                                className={`${styles.cycleDot} ${styles[nextCycleType]}`} 
                                aria-label={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                                title={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                                ></span>);
                    })
                }
            
            </div>
        </div>
    )
}