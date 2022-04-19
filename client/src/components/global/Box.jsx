import React from 'react';

const Box = (props) => {
    return (
        <div className="main__box">
            {props.children}
        </div>
    );
};

export default Box;