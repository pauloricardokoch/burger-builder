import React from 'react';
import PropTypes from 'prop-types';

import styles from './BuildControl.module.css';

const buildControl = props => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button className={styles.Less}
                onClick={props.removed}
                disabled={props.disabled}>Less
        </button>
        <button
            className={styles.More}
            onClick={props.added}>More
        </button>
    </div>
);

buildControl.propTypes = {
    added: PropTypes.func.isRequired,
    removed: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default buildControl;