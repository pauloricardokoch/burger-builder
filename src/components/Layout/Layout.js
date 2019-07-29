import React from 'react';

import Wrap from '../../hoc/Wrap';

import styles from './Layout.module.css';

const layout = props => (
    <Wrap>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Wrap>
);

export default layout;