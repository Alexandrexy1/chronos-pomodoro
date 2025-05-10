import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

export function GenericHtml({ children }: PropsWithChildren) {
    return <div className={ styles.genericHtml }>{ children }</div>
}
