import React from 'react';

export const Todo = props => {

    const clear = () => {
        props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id})
    }

    return (

        <div className="completed" onClick={clear}>
            <p>{props.state.item}</p>
        </div>
    )
}


