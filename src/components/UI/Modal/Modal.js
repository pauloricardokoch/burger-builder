import React from 'react';
import PropTypes from 'prop-types';

import Wrap from '../../../hoc/Wrap';

import Backdrop from './../Backdrop/Backdrop';

import styles from './Modal.module.css';

const modal = props => (
    <Wrap>
        <Backdrop show={props.show} clicked={props.clicked}/>
        <div
            className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Wrap>
);

modal.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired
};

export default modal;