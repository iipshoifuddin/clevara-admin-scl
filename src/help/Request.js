import React, { Component } from 'react';

import RequestTableOfiicer from '../components/base_components/Table/RequestTables/RequestTableOfiicer';
import RequestTableSchool from '../components/base_components/Table/RequestTables/RequestTableSchool';
import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';
import DropDownListFilterWithTab from '../components/base_components/DropDownList/DropDownListFilter/DropDownListFilterWithTab';
import LineComponets from '../components/base_components/Line/LineComponets';


const storeData = [
    {
        school       : "SMPN 12 Bogor",
        npsn         : "0100232",
        officer      : "Daffa", 
        position     : "tata usaha",
        email        : "daffa@gmail.com",
        phone        : "0819899000"
    },
    {
        school       : "SMK 1 Jakarta",
        npsn         : "9800232",
        officer      : "Nopal",
        position     : "tata usaha",
        email        : "nopal@gmail.com",
        phone        : "08971123889"
    },
    {
        school       : "SD Sumbangsih",
        npsn         : "9990232",
        officer      : "Asep K",
        position     : "tata usaha",
        email        : "asep@gmail.com",
        phone        : "0852345876"
    },
];

const dummySchoolsTable = [
    {
        school       : "SMPN 12 Bogor",
        npsn         : "0100232",
        officer      : "Daffa", 
        email        : "daffa@gmail.com",
        phone        : "0819899000",
        status       : "Update Data",

    },
    {
        school       : "SMK 1 Jakarta",
        npsn         : "9800232",
        officer      : "Nopal",
        position     : "tata usaha",
        email        : "nopal@gmail.com",
        phone        : "08971123889",
        status       : "update Data",
    },
    {
        school       : "SD Sumbangsih",
        npsn         : "9990232",
        officer      : "Asep K",
        position     : "tata usaha",
        email        : "asep@gmail.com",
        phone        : "0852345876",
        status       : "Create New",
    },
];


class Request extends Component {
    render() {
        return (
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        titlePage="Request"
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
                    />
                </section>
                <section>
                    <div style={{marginTop: "30px"}}></div>
                    <DropDownListFilterWithTab 
                        officerTotal="553"
                        storeBadges={[
                            {
                                name     : "Operator",
                                idBadges : "bagdesForRequestOfficerId"
                            },
                            {
                                name     : "Sekolah",
                                idBadges : "bagdesForRequestShoolsId"
                            },
                        ]}
                    />
                    <LineComponets marginTop="-1px" />
                </section>
                <section className="tablesForRequestClass" id="bagdesForRequestOfficerId" style={{display: "none"}}>
                    <div style={{marginTop: "25px"}}></div>
                    <RequestTableOfiicer
                        store={storeData}
                    />
                </section>
                <section className="tablesForRequestClass" id="bagdesForRequestShoolsId" style={{display: "none"}}>
                    <div style={{marginTop: "25px"}}></div>
                    <RequestTableSchool
                        store={dummySchoolsTable}
                    />
                    <div style={{marginBottom: "351px"}}></div>
                </section>

            </div>
        );
    }
}

export default Request;