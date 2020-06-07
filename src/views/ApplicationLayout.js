import React from 'react';
// import { NavigationBar, MobileNavigationBar, Footer, MobileFooter } from '../component/base_component/'

// import { OnDesktop, OnMobileAndTablet } from '../constants/'
import Base from './Base';

export default class ApplicationLayout extends Base {
    render() {
        return (
            <div>
                {/* <Whatsapp /> */}
                <header>
                </header>

                <div id="content">
                    {this.props.children}
                </div>

                <footer>
                </footer>
            </div>
        )
    }
}
