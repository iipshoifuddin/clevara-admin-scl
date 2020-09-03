import axios from 'axios';

export function homepageHaveError(bool) {
    return {
        type: 'HOMEPAGE_HAVE_ERROR',
        hasError: bool
    };
}

export function homepageAreLoading(bool) {
    return {
        type: 'HOMEPAGE_ARE_LOADING',
        isLoading: bool
    };
}

export function homepageFetchDataSuccess(api) {
    return {
        type: 'HOMEPAGE_FETCH_DATA_SUCCESS',
        api
    };
}

export function homepageFetchDataSuccessSMP(api) {
    return {
        type: 'HOMEPAGE_FETCH_DATA_SUCCESS_SMP',
        api
    };
}

export function homepageFetchDataSuccessSMA(api) {
    // console.log(api);
    return {
        type: 'HOMEPAGE_FETCH_DATA_SUCCESS_SMA',
        api
    };
}

export function promoFetchDataSuccess(api) {
    return {
        type: 'PROMO_FETCH_DATA_SUCCESS',
        api
    };
}

export function homepageFetchData(url) {
    return (dispatch) => {
        dispatch(homepageAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(homepageAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(homepageFetchDataSuccess(response.data)))
                .catch(() => dispatch(homepageHaveError(true)));
        
               
        }, 250);
    };
}

export function homepageFetchDataSMP(url) {
    return (dispatch) => {
        dispatch(homepageAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(homepageAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(homepageFetchDataSuccessSMP(response.data)))
                .catch(() => dispatch(homepageHaveError(true)));
        
               
        }, 250);
    };
}


export function homepageFetchDataSMA(url) {
    return (dispatch) => {
        dispatch(homepageAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(homepageAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(homepageFetchDataSuccessSMA(response.data)))
                .catch(() => dispatch(homepageHaveError(true)));
        
               
        }, 250);
    };
}

export function promoFetchData(url) {
    return (dispatch) => {
        dispatch(homepageAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(homepageAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(promoFetchDataSuccess(response.data)))
                .catch(() => dispatch(homepageHaveError(true)));
        }, 250);
    };
}