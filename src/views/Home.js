import React, { Component } from 'react';

import AdministratorTable from '../components/base_components/Table/AdministratorTable';
import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';

const storeData = [
    {
        id          : "Staff001",
        email       : "daffa@mail.com",
        name        : "Daffa",
        role        : "Super Admin",
        password    : ""
    },
    {
        id          : "Staff002",
        email       : "nopal@mail.com",
        name        : "Nopal",
        role        : "Admin",
        password    : ""
    },
    {
        id          : "Staff003",
        email       : "nando@mail.com",
        name        : "Nando",
        role        : "Admin",
        password    : ""
    },
];

class Home extends Component {
    render() {
        return (
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        titlePage="Administrator"
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
                    />
                    <div style={{marginBottom: "73px"}}></div>
                </section>
                <section>
                    <AdministratorTable
                        store={storeData}
                    />
                </section>
            </div>
        );
    }
}

export default Home;