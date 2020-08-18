
export function majorHaveError(state = false, action) {
    switch (action.type) {
        case 'MAJOR_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function majorAreLoading(state = false, action) {
    switch (action.type) {
        case 'MAJOR_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function major(state = [], action) {
    switch (action.type) {
        case 'MAJOR_FETCH_DATA_SUCCESS':
            // console.log(action);
            // let convertArrayData=[];
            // convertArrayData[0]=;
            return action.api.schools.majors;

        default:
            return state;
    }
}

export function majorDelete(state = [], action) {
    switch (action.type) {
        case 'MAJOR_DELETE_FETCH_DATA_SUCCESS':
            // console.log(action);
            return action.api;

        default:
            return state;
    }
}