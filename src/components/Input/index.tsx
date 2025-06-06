import { HTMLInputTypeAttribute, InputHTMLAttributes, Ref } from "react";

import styles from "./styles.module.css";

interface InputPropsInterface extends InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    labelText?: string;
    id: string;
    ref?: Ref<HTMLInputElement>;
}


export function Input({ type, id, labelText, ref, ...rest }: InputPropsInterface) {
        return (
            <>
                { labelText && <label htmlFor={ id }>{ labelText }</label> }
                <input className={ styles.input } id={ id } type={ type } ref={ref} { ...rest } />
            </>
        )
}