import React, { Component } from 'react';

import OfficerTable from '../components/base_components/Table/OfficerTable/OfficerTable';
import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';
import DropDownListFilter from '../components/base_components/DropDownList/DropDownListFilter/DropDownListFilter';


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
                    <OfficerTable
                        store={storeData}
                    />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
            </div>
        );
    }
}

export default Officer;