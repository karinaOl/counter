import s from "./Button.module.css";

type ButtonType = {
    name: string
    onClick: ()=>void
    disabled: boolean
}

export const Button  = (props: ButtonType) => {

    const onClickHandler = () => {
      props.onClick()
    }

    return <button className={s.button} onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>

}