import React from 'react'

    const button = (props) => (
        <button className="btn btn-success me-2 fw-bold border border-info" onClick={props.clic}>
            {props.children}
        </button>
    );

export default button;