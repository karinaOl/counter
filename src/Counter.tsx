import {Button} from "./Button";
import s from './Counter.module.css'

type CounterType = {
    value: number
    setValue: (value: number) => void
    minValue: number
    maxValue: number
}

export const Counter = (props: CounterType) => {

    const increasedValue = () => {
        if (props.value < props.maxValue) {
            props.setValue(props.value + 1)
        }
    }

    const resetValue = () => {
        props.setValue(props.minValue)
    }


    return (
        <div className={s.wrapper}>
            <div className={props.value === props.maxValue ? `${s.counter} ${s.counterMaxvalue}` : s.counter}>{props.value}</div>
            <div className={s.buttons}>
                <Button name={'inc'} onClick={increasedValue} disabled={props.value === props.maxValue}/>
                <Button name={'reset'} onClick={resetValue} disabled={props.value === props.minValue}/>
            </div>
        </div>
    )
}
