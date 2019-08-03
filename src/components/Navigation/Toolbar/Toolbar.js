import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';

import MenuButton from '../../UI/MenuButton/MenuButton';

import styles from './Toolbar.module.css';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <MenuButton clicked={props.menuClicked}/>
        <div className={styles.Logo}>
            <Logo/>
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

toolbar.propTypes = {
    menuClicked: PropTypes.func.isRequired
};

export default toolbar;
