import s from "./Settings.module.css"
import {Button} from "../Button/Button";
import {Input} from "./Input";
import {ChangeEvent} from "react";

type SettingsType = {
    minValue: number
    maxValue: number
    changeSettings: (e: ChangeEvent<HTMLInputElement>)=>void
    setSettings: ()=>void
    setButtonDisabled: boolean
}

export const Settings = (props: SettingsType) => {

    return (
        <div className={s.wrapper}>
            <div className={s.settingsDisplay}>
                <Input
                    label={"Min value:"}
                    value={props.minValue}
                    onChange={props.changeSettings}
                    name={"minValue"}/>
                <Input
                    label={"Max value :"}
                    value={props.maxValue}
                    onChange={props.changeSettings}
                    name={"maxValue"}/>
            </div>
            <div className={s.buttons}>
                <Button name={"set"}
                        onClick={props.setSettings}
                        disabled={props.setButtonDisabled}/>
            </div>
        </div>
    )
}