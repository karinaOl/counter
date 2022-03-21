type ButtonType = {
    name: string
    onClick: ()=>void
    disabled: boolean
}

export const Button  = (props: ButtonType) => {

    const onClickHandler = () => {
      props.onClick()
    }

    return <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>

}