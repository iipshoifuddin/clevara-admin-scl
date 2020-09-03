import SweetAlert from '../../../components/base_components/SweetAlert/SweetAlert';

export function fotoDataHaveError(state = false, action) {
    switch (action.type) {
        case 'FOTO_DATA_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function fotoDataAreLoading(state = false, action) {
    switch (action.type) {
        case 'FOTO_DATA_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function fotoData(state = [], action) {
    switch (action.type) {
        case 'FOTO_DATA_FETCH_DATA_SUCCESS':
            // console.log(action.api.schools.images);
            // let convertArrayData=[];
            // convertArrayData[0]=action.api;
            return action.api.schools.images;

        default:
            return state;
    }
}
