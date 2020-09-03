export function completeAddressHaveError(state = false, action) {
    switch (action.type) {
        case 'COMPLETE_ADDRESS_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function completeAddressAreLoading(state = false, action) {
    switch (action.type) {
        case 'COMPLETE_ADDRESS_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function provincelist(state = [], action) {
    switch (action.type) {
        case 'PROVINCE_FETCH_DATA_SUCCESS':
            return action.api.province;

        default:
            return state;
    }
}

export function regencylist(state = [], action) {
    switch (action.type) {
        case 'REGENCY_FETCH_DATA_SUCCESS_CITY':
            console.log(action);
            return action.api.data;

        default:
            return state;
    }
}

export function districtlist(state = [], action) {
    switch (action.type) {
        case 'DISTRICT_FETCH_DATA_SUCCESS_DISTRICT':
            console.log(action);
            return action.api.data;
        default:
            return state;
    }
}