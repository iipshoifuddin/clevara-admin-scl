
export function schoolsHaveError(state = false, action) {
    switch (action.type) {
        case 'SCHOOLS_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function schoolsAreLoading(state = false, action) {
    switch (action.type) {
        case 'SCHOOLS_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function schools(state = [], action) {
    switch (action.type) {
        case 'SCHOOLS_FETCH_DATA_SUCCESS':
            // console.log(action);
            let convertArrayData=[];
            convertArrayData[0]=action.api.schools;
            return convertArrayData;

        default:
            return state;
    }
}

export function schoolsCost(state = [], action) {
    switch (action.type) {
        case 'SCHOOLS_FETCH_DATA_SUCCESS':
            // console.log(action);
            // let convertArrayData=[];
            // convertArrayData[0]=;
            // console.log(action.api.schools.costs)
            return [action.api.schools.costs];

        default:
            return state;
    }
}

export function registrationSchools(state = [], action) {
    switch (action.type) {
        case 'SCHOOLS_FETCH_DATA_SUCCESS':
            // console.log(action);
            // let convertArrayData=[];
            // convertArrayData[0]=;
            // console.log(action.api.schools.costs)
            return [action.api.schools.registration];

        default:
            return state;
    }
}

export function schoolsFacilities(state = [], action) {
    switch (action.type) {
        case 'SCHOOLS_FETCH_DATA_SUCCESS':
            // console.log(action);
            // let convertArrayData=[];
            // convertArrayData[0]=;
            // console.log(action.api.schools.costs)
            return action.api.schools.facilities;

        default:
            return state;
    }
}

export function schoolsExtracurricular(state = [], action) {
    switch (action.type) {
        case 'SCHOOLS_FETCH_DATA_SUCCESS':
            // console.log(action);
            // let convertArrayData=[];
            // convertArrayData[0]=;
            // console.log(action.api.schools.costs)
            return action.api.schools.extracurricular;

        default:
            return state;
    }
}

