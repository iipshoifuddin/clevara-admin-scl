import React, { Component } from 'react';

import InboxTable from '../components/base_components/Table/InboxTable/InboxTable';
import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';
import DropDownListFilter from '../components/base_components/DropDownList/DropDownListFilter/DropDownListFilter';


const storeData = [
    {
        name         : "Daffa",
        email        : "daffa@gmail.com",
        message      : "0819899000"
    },
    {
        name         : "Nopal",
        email        : "nopal@gmail.com",
        message      : "08971123889"
    },
    {
        name         : "Asep K",
        email        : "asep@gmail.com",
        message      : "0852345876"
    },
];

class Inbox extends Component {
    render() {
        return (
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        titlePage="Operator"
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
                    />
                </section>
                <section>
                    <div style={{marginTop: "30px"}}></div>
                    <DropDownListFilter 
                        officerTotal="553"
                    />
                </section>
                <section>
                    <div style={{marginTop: "25px"}}></div>
                    <InboxTable
                        store={storeData}
                    />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
            </div>
        );
    }
}

export default Inbox;