import React from 'react';
// import { NavigationBar, MobileNavigationBar, Footer, MobileFooter } from '../component/base_component/'

// import { OnDesktop, OnMobileAndTablet } from '../constants/'
import Base from './Base';
import SidebarCompnents from '../components/base_components/Headers/SidebarCompnents';


const data = [
    {
        name        :"Administrator",
        icon        :"home",
        fontIcon    :"Feather",
        singleBarId : "firstSinglebarId",
        link        : "/home"
    },
    {
        name        :"Operator",
        icon        :"users",
        fontIcon    :"Feather",
        singleBarId : "SecondSinglebarId",
        link        : "/officer"
    },
    {
        name        :"Request",
        icon        :"user-plus",
        fontIcon    :"Feather",
        singleBarId : "thirdSinglebarId",
        link        : "/requset"
    },
    {
        name        :"Sekolah",
        icon        :"graduation-cap",
        fontIcon    :"Entypo",
        singleBarId : "fourthSinglebarId",
        link        : "/schools"
    },
    {
        name        :"Banner",
        icon        :"image",
        fontIcon    :"Feather",
        singleBarId : "fifthSinglebarId",
        link        : "/banner"
    },
    
]

export default class ApplicationLayout extends Base {
    // componentDidMount = () =>{
        
    // }
    render() {
        return (
            <div>
                {/* <Whatsapp /> */}
                <header>
                    {window.location.pathname!=="/" ? <SidebarCompnents 
                        store={data}
                    /> : ""}
                </header>

                {window.location.pathname==="/" ? <div id="content">{this.props.children}</div>:
                <div id="contentDashboardEduplus" style={{marginLeft:"250px"}}>{this.props.children}</div>}
                <footer>
                </footer>
            </div>
        )
    }
}
