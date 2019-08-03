import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';

import Backdrop from '../../UI/Backdrop/Backdrop';

import Wrap from '../../../hoc/Wrap';

import styles from './SideDrawer.module.css';

const sideDrawer = props => {
    let classes = [styles.SideDrawer];
    if (props.show)
        classes.push(styles.Open);
    else
        classes.push(styles.Close);

    return (
        <Wrap>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={classes.join(" ")}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Wrap>
    )
};

sideDrawer.propTypes = {
    closed: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

export default sideDrawer;