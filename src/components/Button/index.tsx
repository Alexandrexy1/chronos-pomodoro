
import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    color?: "green" | "red";
}

export function Button({ icon, color = "green", ...props }: ButtonProps) {
    return (
            <button className={` ${styles.button} ${styles[color]} `} { ...props }>
                { icon }
            </button>
    )
}
