import { HTMLInputTypeAttribute } from "react";

interface InputPropsInterface {
    type: HTMLInputTypeAttribute;
    id: string;

}


export function Input({ type, id }: InputPropsInterface) {
    return (
        <>
            <label htmlFor={ id }>task</label>
            <input id={ id } type={ type } />
        </>
    )
}
