import s from "./Input.module.css"
import {ChangeEvent} from "react";

type InputType = {
    label: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
}

export const Input = (props: InputType) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e)
    }
    return (
        <label className={s.label}>
            {props.label}
            <input
                type={"number"}
                className={s.input}
                value={props.value}
                onChange={onChange}
                name={props.name}/>
        </label>
    )
}