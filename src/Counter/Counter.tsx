import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterType = {
    value: number | string
    setValue: (value: number) => void
    minValue: number
    maxValue: number
    incButtonDisable: boolean
    resetButtonDisable: boolean
}

export const Counter = (props: CounterType) => {

    const increasedValue = () => {
        if (props.value < props.maxValue && typeof props.value === "number") {
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
                <Button name={'inc'} onClick={increasedValue} disabled={props.incButtonDisable}/>
                <Button name={'reset'} onClick={resetValue} disabled={props.resetButtonDisable}/>
            </div>
        </div>
    )
}
