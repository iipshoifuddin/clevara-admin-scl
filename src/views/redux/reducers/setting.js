import SweetAlert from '../../../components/base_components/SweetAlert/SweetAlert';

export function settingHaveError(state = false, action) {
    switch (action.type) {
        case 'SETTING_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function settingAreLoading(state = false, action) {
    switch (action.type) {
        case 'SETTING_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function setting(state = [], action) {
    switch (action.type) {
        case 'SETTING_FETCH_DATA_SUCCESS':
            console.log(action);
            let convertArrayData=[];
            convertArrayData[0]=action.api;
            return convertArrayData;

        default:
            return state;
    }
}

export function changePassword(state = [], action) {
    switch (action.type) {
        case 'CHANGE_PASSWORD_DATA_SUCCESS':
            if(action.api.success)
            {
                SweetAlert("Success !","Password anda berhasil diubah.", "success" );
            }
            console.log(action);
            let convertArrayData=[];
            convertArrayData[0]=action.api;
            return convertArrayData;

        default:
            return state;
    }
}