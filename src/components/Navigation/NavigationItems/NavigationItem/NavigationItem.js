import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={styles.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? styles.active : null}>{props.children}</a>
    </li>
);

navigationItem.propTypes = {
    link: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default navigationItem;
