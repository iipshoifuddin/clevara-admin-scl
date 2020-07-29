import axios from 'axios';

export function searchpageHaveError(bool) {
    return {
        type: 'COMPLETE_ADDRESS_HAVE_ERROR',
        hasError: bool
    };
}

export function completeAddressAreLoading(bool) {
    return {
        type: 'COMPLETE_ADDRESS_ARE_LOADING',
        isLoading: bool
    };
}

export function provinceFetchDataProvSuccess(api) {
    return {
        type: 'PROVINCE_FETCH_DATA_SUCCESS',
        api
    };
}

export function regencyFetchDataCitySuccess(api) {
    return {
        type: 'REGENCY_FETCH_DATA_SUCCESS_CITY',
        api
    };
}


export function districtFetchDataDistrictSuccess(api) {
    return {
        type: 'DISTRICT_FETCH_DATA_SUCCESS_DISTRICT',
        api
    };
}

export function provinceFetchProvData(url) {
    return (dispatch) => {
        dispatch(completeAddressAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(completeAddressAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(provinceFetchDataProvSuccess(response.data)))
                // .catch(() => dispatch(searchpageHaveError(true)));
        }, 500);
    };
}

export function regencyFetchCityData(url) {
    return (dispatch) => {
            // dispatch(completeAddressAreLoading(true));
    
            setTimeout(() => {
                axios.get(url)
                    .then((response) => {
                        // console.log(response.data);
                        if (response.status !== 200) {
                            throw Error(response.statusText);
                        }
    
                        dispatch(completeAddressAreLoading(false));
                        return response;
                    })
                    .then((response) => dispatch(regencyFetchDataCitySuccess(response.data)))
                    // .catch(() => dispatch(searchpageHaveError(true)));
        }, 500);
    };
}

export function districtFetchDistrictData(url) {
    return (dispatch) => {
            // dispatch(completeAddressAreLoading(true));
    
            setTimeout(() => {
                axios.get(url)
                    .then((response) => {
                        console.log(response.data);
                        if (response.status !== 200) {
                            throw Error(response.statusText);
                        }
    
                        dispatch(completeAddressAreLoading(false));
                        return response;
                    })
                    .then((response) => dispatch(districtFetchDataDistrictSuccess(response.data)))
                    // .catch(() => dispatch(searchpageHaveError(true)));
        }, 500);
    };
}