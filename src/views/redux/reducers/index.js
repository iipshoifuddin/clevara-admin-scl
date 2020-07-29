import { combineReducers } from 'redux';

import{
    loginHaveError,
    loginAreLoading,
    login,
} from './auth/login';

import{
    requestToken,
    requestTokenAreLoading,
    requestTokenHaveError,
} from './auth/requesttoken';

import{
    settingHaveError,
    settingAreLoading,
    setting,
    changePassword,
}from './setting';

import{
    foto,
    fotoAreLoading,
    fotoHaveError,
}from './foto';

import{
    provincelist,
    regencylist,
    districtlist,
}from './completeaddress';

import{
    schoolsHaveError,
    schoolsAreLoading,
    schools,
    schoolsCost,
    registrationSchools,
    schoolsFacilities,
    schoolsExtracurricular,
}from './schools';

// import { items, itemsHaveError, itemsAreLoading } from './items';

export default combineReducers({
    requestToken,
    requestTokenAreLoading,
    requestTokenHaveError,

    // items, 
    // itemsAreLoading,
    // itemsHaveError,

    loginHaveError,
    loginAreLoading,
    login,

    settingHaveError,
    settingAreLoading,
    setting,
    changePassword,

    fotoHaveError,
    fotoAreLoading,
    foto,

    provincelist,
    regencylist,
    districtlist,

    schoolsHaveError,
    schoolsAreLoading,
    schools,
    schoolsCost,
    registrationSchools,
    schoolsFacilities,
    schoolsExtracurricular,
});

