
export function extracurricularHaveError(state = false, action) {
    switch (action.type) {
        case 'EXTRACURRICULAR_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function extracurricularAreLoading(state = false, action) {
    switch (action.type) {
        case 'EXTRACURRICULAR_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function extracurricular(state = [], action) {
    switch (action.type) {
        case 'EXTRACURRICULAR_FETCH_DATA_SUCCESS':
            // console.log(action);
            // let convertArrayData=[];
            // convertArrayData[0]=;
            // console.log(action.api.schools.costs)
            return action.api.schools.extracurricular;

        default:
            return state;
    }
}

export function extracurricularDelete(state = [], action) {
    switch (action.type) {
        case 'EXTRACURRICULAR_DELETE_FETCH_DATA_SUCCESS':
            // console.log(action);
            // let convertArrayData=[];
            // convertArrayData[0]=;
            // console.log(action.api.schools.costs)
            return action.api.schools.extracurricular;

        default:
            return state;
    }
}
