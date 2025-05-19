export interface TaskModel {
    id: string;
    name: string;
    durationInMinutes: number;
    startDate: number;
    endDate: number | null;
    interruptDate: number | null;
    type: "workTime" | "shortBreakTime" | "longBreakTime";
    
}