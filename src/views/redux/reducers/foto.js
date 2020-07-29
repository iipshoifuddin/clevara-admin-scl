import SweetAlert from '../../../components/base_components/SweetAlert/SweetAlert';

export function fotoHaveError(state = false, action) {
    switch (action.type) {
        case 'FOTO_HAVE_ERROR':
            if(action.hasError){
                SweetAlert("Upload Gagal !","File gagal di upload.", "error" );
            }
            return action.hasError;

        default:
            return state;
    }
}

export function fotoAreLoading(state = false, action) {
    switch (action.type) {
        case 'FOTO_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function foto(state = [], action) {
    switch (action.type) {
        case 'FOTO_FETCH_DATA_SUCCESS':
            console.log(action.api);
            if(action.api){
                SweetAlert("Upload Berhasil !","File berhasil di Upload.", "success" );
            }
            return action.api.success;

        default:
            return state;
    }
}
