import React from 'react';

function Minutes (props) {
    const styles = {
        color: "white"
    }
    return (  
        <React.Fragment>
            <button className="btn btn-secondary m-3" onClick={ () => props.onDecrement() }>-</button>
            <span style={styles} className="m-3"><b>{props.minutes} Minute</b></span>
            <button className="btn btn-secondary m-3" onClick={ () => props.onIncrement() }>+</button>
        </React.Fragment>
    );
}
 
export default Minutes;