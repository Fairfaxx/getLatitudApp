import React from 'react';


const Spinner = (props) => {
    return (
        
        <div className="ui active dimmer">
            <div className="ui text loader"><h2>{props.message}</h2></div>
        </div>
    );
};

// El objeto queda como un mensaje de default en caso que reutilice el componente y olvide del mensaje
Spinner.defaultProps = {
    message: 'Loading, wait a second please'
};

export default Spinner;