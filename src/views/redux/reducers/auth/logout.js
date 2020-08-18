import SweetAlert from '../../../../components/base_components/SweetAlert/SweetAlert';

export function logoutHaveError(state = false, action) {
    switch (action.type) {
        case 'LOGOUT_HAVE_ERROR':
            console.log(action);
            return action.hasError;
        default:
            return state;
    }
}

export function logoutAreLoading(state = false, action) {
    switch (action.type) {
        case 'LOGOUT_ARE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function logout(state = [], action){
    switch (action.type) {
        case 'LOGOUT_FETCH_DATA_SUCCESS':
            if(action.api){
                // SweetAlert("Logout !","Berhasil logout !", "success" );
            }
            return action.api;
        default:
            return state;
    }
}
