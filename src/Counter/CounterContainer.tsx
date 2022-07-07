import {Counter} from "./Counter";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Settings} from "./Settings";
import s from "./CounterContainer.module.css";
import {useDispatch, useSelector} from "react-redux";
import {increaseValue, resetValue, setErrorValue, setMaxValue, setMinValue} from "../store/counterReducer";
import {RootAppStateType} from "../store/store";

export const CounterContainer = () => {

    const dispatch = useDispatch();
    const minValue = useSelector<RootAppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootAppStateType, number>(state => state.counter.maxValue)
    const value = useSelector<RootAppStateType, number | string>(state => state.counter.value)

    useEffect(() => {
        const minValueInLS = localStorage.getItem("counter_minValue");
        const maxValueInLS = localStorage.getItem("counter_maxValue");
        if(minValueInLS) {
            const minValueFromLS = JSON.parse(minValueInLS);
            dispatch(setMinValue(minValueFromLS));
            dispatch(resetValue());
        }
        if(maxValueInLS) {
            const maxValueFromLS = JSON.parse(maxValueInLS);
            dispatch(setMaxValue(maxValueFromLS));
        }
    }, []);

    const saveSettingsToLS = () => {
        localStorage.setItem("counter_minValue", JSON.stringify(minValue));
        localStorage.setItem("counter_maxValue", JSON.stringify(maxValue));
    };

    const changeSettings = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.valueAsNumber
        dispatch(setErrorValue("Set settings"))
        if (e.currentTarget.name === "minValue") {
            if (currentValue >= maxValue || currentValue < 0) {
                dispatch(setErrorValue("Error"))
            }
            dispatch(setMinValue(currentValue))
        }
        if (e.currentTarget.name === "maxValue") {
            if (currentValue <= minValue || minValue < 0) {
                dispatch(setErrorValue("Error"))
            }
            dispatch(setMaxValue(currentValue))
        }
    }


    const setValue = () => {
        dispatch(resetValue())
    }

    const increaseCounter = () => {
        dispatch(increaseValue())
    }

    const setSettings = () => {
        dispatch(resetValue());
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
                resetValue={setValue}
                increaseCounter={increaseCounter}
                minValue={minValue}
                maxValue={maxValue}
                incButtonDisable={incButtonDisable}
                resetButtonDisable={resetButtonDisable}
            />
        </div>
    );
};