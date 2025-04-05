import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface InputPropsInterface extends InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    labelText?: string;
    id: string;

}


export function Input({ type, id, labelText, ...rest }: InputPropsInterface) {
    return (
        <>
            { labelText && <label htmlFor={ id }>{ labelText }</label> }
            <input className={ styles.input } id={ id } type={ type } { ...rest } />
        </>
    )
}
