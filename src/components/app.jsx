import React, { useState, useEffect } from 'react';

import '../App.css'

import Minutes from './minutes';
import Seconds from './seconds';




function App () {
    
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    
    const handelIncrement = () => {
        setMinutes(minutes + 1);
    }

    const handelDecrement = () => {
        if(minutes > 0) setMinutes( minutes - 1);
    }

    useEffect(() => {
        if(seconds === 0) setMinutes(0);
    },[seconds]);

    useEffect(() => {
        setSeconds(minutes * 60);

        const count = setInterval(()=>{setSeconds(prevState=> prevState-1)},1000);
        return () => clearInterval(count);
    },[minutes]);

    return ( 
        <div className="App">
            <header className="App-header">
                    <div className="col-12" style={{marginTop : "100px"}}>
                        <Minutes minutes={minutes} onIncrement = {handelIncrement} onDecrement={handelDecrement}/>
                    </div>
                    <div className="col" style={{marginTop : "300px"}}>
                        { seconds > 0 ? <Seconds seconds={seconds} /> : '' }
                    </div>
            </header>
        </div>
        
    );
}
 
export default App;
