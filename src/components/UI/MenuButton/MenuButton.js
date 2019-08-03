import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuButton.module.css';

const menuButton = props => (
    <div className={styles.MenuButton} onClick={props.clicked}>
        <div className={styles.MenuButtonLine}/>
        <div className={styles.MenuButtonLine}/>
        <div className={styles.MenuButtonLine}/>
    </div>
);

menuButton.propTypes = {
    clicked: PropTypes.func.isRequired
};

export default menuButton;