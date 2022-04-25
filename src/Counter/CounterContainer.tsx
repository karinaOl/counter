import {Counter} from "./Counter";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Settings} from "./Settings";
import s from "./CounterContainer.module.css";

export const CounterContainer = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    let [value, setValue] = useState<number | string>(minValue)

    useEffect(() => {
        const minValueInLS = localStorage.getItem("counter_minValue");
        const maxValueInLS = localStorage.getItem("counter_maxValue");
        if(minValueInLS) {
            const minValueFromLS = JSON.parse(minValueInLS);
            setMinValue(minValueFromLS);
            setValue(minValueFromLS);
        }
        if(maxValueInLS) {
            const maxValueFromLS = JSON.parse(maxValueInLS);
            setMaxValue(maxValueFromLS);
        }
    }, []);

    const saveSettingsToLS = () => {
        localStorage.setItem("counter_minValue", JSON.stringify(minValue));
        localStorage.setItem("counter_maxValue", JSON.stringify(maxValue));
    };

    const changeSettings = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.valueAsNumber
        setValue("Set settings")
        if (e.currentTarget.name === "minValue") {
            if (currentValue >= maxValue || currentValue < 0) {
                setValue("Error")
            }
            setMinValue(currentValue)
        }
        if (e.currentTarget.name === "maxValue") {
            if (currentValue <= minValue || minValue < 0) {
                setValue("Error")
            }
            setMaxValue(currentValue)
        }
    }

    const setSettings = () => {
        setValue(minValue)
        saveSettingsToLS()
    }

    const setButtonDisabled = minValue < 0 || minValue >= maxValue || maxValue < 0 || typeof value === "number";
    const incButtonDisable = value === maxValue || typeof value === "string"
    const resetButtonDisable = value === minValue || typeof value === "string"

    return (
        <div className={s.container}>
            <Settings
                minValue={minValue}
                maxValue={maxValue}
                changeSettings={changeSettings}
                setSettings={setSettings}
                setButtonDisabled={setButtonDisabled}
            />
            <Counter
                value={value}
                setValue={setValue}
                minValue={minValue}
                maxValue={maxValue}
                incButtonDisable={incButtonDisable}
                resetButtonDisable={resetButtonDisable}
            />
        </div>
    );
};