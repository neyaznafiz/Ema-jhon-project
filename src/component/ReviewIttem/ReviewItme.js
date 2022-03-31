import React from 'react';

const ReviewItme = (props) => {

const {name, price, shipping, quantity}=props.product

    return (
        <div>
            <h3>This your selected Itmes : {name} </h3>
        </div>
    );
};

export default ReviewItme;