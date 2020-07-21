import React, { Component } from 'react';
import $ from 'jquery';

import SchoolsListTable from '../components/base_components/Table/ShooolsListTable/SchoolsListTable';
import SchoolsListTableFavorite from '../components/base_components/Table/ShooolsListTable/SchoolsListTableFavorite';
import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';
import PrimaryBadges from '../components/base_components/Badges/PrimaryBadges';
import LineComponets from '../components/base_components/Line/LineComponets';
import JumbotronForm from '../components/base_components/Form/Banner/Jumbotron/JumbotronForm';
import Promo1Form from '../components/base_components/Form/Banner/Promo1/Promo1Form';
import Promo2Form from '../components/base_components/Form/Banner/Promo2/Promo2Form';
import ProvinceForm from '../components/base_components/Form/Banner/Province/ProvinceForm';
import RegencyForm from '../components/base_components/Form/Banner/Regency/RegencyForm';

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


class Banner extends Component {
    render() {
        return (
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        titlePage="Banner"
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
                    />
                </section>
                <section>
                    <div style={{marginTop: "50px"}}></div>
                    <PrimaryBadges 
                        officerTotal="553"
                        storeBadges={[
                            {
                                name     : "Jumbotron",
                                idBadges : "bagdesForBannerJumbotronId"
                            },
                            {
                                name     : "Promo 1",
                                idBadges : "bagdesForBannerPromo1sId"
                            },
                            {
                                name     : "Promo 2",
                                idBadges : "bagdesForBannerPromo2Id"
                            },
                            {
                                name     : "Provinsi",
                                idBadges : "bagdesForBannerProvinceId"
                            },
                            {
                                name     : "Kabupaten / Kota",
                                idBadges : "bagdesForBannerRegencyId"
                            },
                        ]}
                    />
                    <LineComponets marginTop="-1px" />
                </section>
                <section className="tablesForRequestClass" id="bagdesForBannerJumbotronId" style={{display: "none"}}>
                    <div style={{marginTop: "25px"}}></div>
                        <JumbotronForm
                            store={storeData}
                        />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
                <section className="tablesForRequestClass" id="bagdesForBannerPromo1sId" style={{display: "none"}}>
                    <div style={{marginTop: "25px"}}></div>
                        <Promo1Form
                            // store={dummySchoolsTable}
                        />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
                <section className="tablesForRequestClass" id="bagdesForBannerPromo2Id" style={{display: "none"}}>
                    <div style={{marginTop: "25px"}}></div>
                        <Promo2Form
                            // store={dummySchoolsTable}
                        />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
                <section className="tablesForRequestClass" id="bagdesForBannerProvinceId" style={{display: "none"}}>
                    <div style={{marginTop: "25px"}}></div>
                        <ProvinceForm
                            // store={dummySchoolsTable}
                        />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
                <section className="tablesForRequestClass" id="bagdesForBannerRegencyId" style={{display: "none"}}>
                    <div style={{marginTop: "25px"}}></div>
                        <RegencyForm
                            // store={dummySchoolsTable}
                        />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
            </div>
        );
    }
}

export default Banner;