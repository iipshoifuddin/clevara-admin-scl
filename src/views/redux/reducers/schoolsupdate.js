import SweetAlert from '../../../components/base_components/SweetAlert/SweetAlert';

export function shcoolsUpdateHaveError(state = false, action) {
    switch (action.type) {
        case 'SCHOOLS_UPDATE_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function schoolsUpdateAreLoading(state = false, action) {
    switch (action.type) {
        case 'SCHOOLS_UPDATE_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function schoolsUpdate(state = [], action) {
    switch (action.type) {
        case 'SCHOOLS_UPDATE_FETCH_DATA_SUCCESS':
            console.log(action.api.success);
            if(action.api.success===true){
                SweetAlert("Upload Berhasil !","Data berhasil di Upload.", "success" );
            }
            return action.api;

        default:
            return state;
    }
}