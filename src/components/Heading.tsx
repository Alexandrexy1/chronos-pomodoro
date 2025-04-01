import { PropsWithChildren } from "react";
import styles from  "./Heading.module.css";

export function Heading(props: PropsWithChildren) {
    return <h1 className={ styles.heading }>{ props.children }</h1>
}