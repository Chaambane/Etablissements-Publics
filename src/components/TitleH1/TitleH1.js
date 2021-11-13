import React from 'react'

    const titleH1 = (props) => (
        <h1 className="border border-warning rounded p-2 fw-bold bg-info text-center">
            {props.children}
        </h1>
    );

export default titleH1;