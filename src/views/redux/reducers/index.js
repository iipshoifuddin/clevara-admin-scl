import { combineReducers } from 'redux';

import{
    loginHaveError,
    loginAreLoading,
    login,
} from './auth/login';

import{
    logoutHaveError,
    logoutAreLoading,
    logout,
} from './auth/logout'

import{
    requestToken,
    requestTokenAreLoading,
    requestTokenHaveError,
} from './auth/requesttoken';

import{
    checkLogin,
    checkLoginAreLoading,
    checkLoginHaveError,
}from './auth/checklogin';

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
    // schoolsExtracurricular,
}from './schools';

import{
    extracurricularHaveError,
    extracurricularAreLoading,
    extracurricular,
    extracurricularDelete,
} from './extracurricular';

import{
    majorHaveError,
    majorAreLoading,
    major,
    majorDelete,
}from './major';

import{
    shcoolsUpdateHaveError,
    schoolsUpdateAreLoading,
    schoolsUpdate,
} from './schoolsupdate';

import{
    fotoDataHaveError,
    fotoDataAreLoading,
    fotoData,
}from './fotodata';

// import { items, itemsHaveError, itemsAreLoading } from './items';

export default combineReducers({
    requestToken,
    requestTokenAreLoading,
    requestTokenHaveError,

    checkLogin,
    checkLoginAreLoading,
    checkLoginHaveError,

    // items, 
    // itemsAreLoading,
    // itemsHaveError,

    loginHaveError,
    loginAreLoading,
    login,

    logoutHaveError,
    logoutAreLoading,
    logout,

    settingHaveError,
    settingAreLoading,
    setting,
    changePassword,

    fotoHaveError,
    fotoAreLoading,
    foto,

    fotoDataHaveError,
    fotoDataAreLoading,
    fotoData,

    provincelist,
    regencylist,
    districtlist,

    schoolsHaveError,
    schoolsAreLoading,
    schools,
    schoolsCost,
    registrationSchools,
    schoolsFacilities,
    // schoolsExtracurricular,

    extracurricularHaveError,
    extracurricularAreLoading,
    extracurricular,
    extracurricularDelete,

    majorHaveError,
    majorAreLoading,
    major,
    majorDelete,

    shcoolsUpdateHaveError,
    schoolsUpdateAreLoading,
    schoolsUpdate,

});

