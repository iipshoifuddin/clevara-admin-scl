import React, { Component } from 'react';

import OfficerTable from '../components/base_components/Table/OfficerTable/OfficerTable';
import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';


const storeData = [
    {
        officer      : "Daffa",
        position     : "tata usaha",
        school       : "SMPN 12 Bogor",
        email        : "daffa@gmail.com",
        phone        : "0819899000"
    },
    {
        officer      : "Nopal",
        position     : "tata usaha",
        school       : "SMK 1 Jakarta",
        email        : "nopal@gmail.com",
        phone        : "08971123889"
    },
    {
        officer      : "Asep K",
        position     : "daffa@mail.com",
        school       : "SD Sumbangsih",
        email        : "asep@gmail.com",
        phone        : "0852345876"
    },
];

class Officer extends Component {
    render() {
        return (
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
                    />
                    <div style={{marginBottom: "73px"}}></div>
                </section>
                <section>
                    <OfficerTable
                        store={storeData}
                    />
                </section>
            </div>
        );
    }
}

export default Officer;