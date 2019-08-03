import React, {Component} from 'react';

import Wrap from '../../hoc/Wrap';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import styles from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    };

    sideDrawerOpenHandler = () => {
      this.setState({
          showSideDrawer: true
      })
    };

    render() {
        return (
            <Wrap>
                <Toolbar menuClicked={this.sideDrawerOpenHandler}/>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    show={this.state.showSideDrawer}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Wrap>
        );
    }
}

export default Layout;