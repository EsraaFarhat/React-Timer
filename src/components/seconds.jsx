import React from 'react';

function Seconds (props) {
    const styles = {
        color: "white"
    }
    
    return ( 
        <span style={styles} className="m-5"><b>{props.seconds} Second</b></span>
    );

}
 
export default Seconds;