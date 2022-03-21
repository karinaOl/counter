import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {

    const minValue = 0;
    const maxValue = 5;

    let[value, setValue] = useState<number>(minValue)

    return(
        <Counter value={value} setValue={setValue} minValue={minValue} maxValue={maxValue}/>
    )
}

export default App;
