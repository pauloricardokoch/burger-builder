import React from 'react';
import PropTypes from 'prop-types';

import Wrap from '../../../hoc/Wrap';

import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients).map(key => {
        return (
            <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li>
        );
    });

    return (
        <Wrap>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            {ingredientsSummary}
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType={'Danger'} clicked={props.cancel}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.continue}>CONTINUE</Button>
        </Wrap>
    );
};

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    cancel: PropTypes.func.isRequired,
    continue: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
};

export default orderSummary;