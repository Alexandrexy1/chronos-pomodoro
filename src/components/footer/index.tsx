import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css";


export function Footer() {
    return <footer className={ styles.footer }>
        <RouterLink href="/about-pomodoro/">Entenda como funciona a técnica pomodoro</RouterLink>
        <RouterLink href="/about-pomodoro/">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</RouterLink>
    </footer>
    
}
