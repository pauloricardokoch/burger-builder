import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const button = props => (
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

button.propTypes = {
    clicked: PropTypes.func,
    btnType: PropTypes.string.isRequired
};

export default button;