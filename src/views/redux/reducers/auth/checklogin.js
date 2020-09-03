import SweetAlert from '../../../../components/base_components/SweetAlert/SweetAlert';

export function checkLoginHaveError(state = false, action) {
    switch (action.type) {
        case 'CHECK_LOGIN_HAVE_ERROR':
            // if(data !== undefined){
            //     SweetAlert("Account Must Be Activated !","Tunggu konfirmasi dari edu plus untuk masuk ke halaman berikutnya.", "warning" );
            // }
            console.log(action.api);
            return action.hasError;
        default:
            return state;
    }
}

export function  checkLoginAreLoading(state = false, action) {
    switch (action.type) {
        case 'CHECK_LOGIN_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function  checkLogin(state = [], action) {
    switch (action.type) {
        case 'CHECK_LOGIN_FETCH_DATA_SUCCESS':
            console.log(action);
            return [action];

        default:
            return state;
    }
}