import axios from 'axios';

export function shcoolsHaveError(bool) {
    return {
        type: 'SCHOOLS_HAVE_ERROR',
        hasError: bool
    };
}

export function schoolsAreLoading(bool) {
    return {
        type: 'SCHOOLS_ARE_LOADING',
        isLoading: bool
    };
}

export function schoolsFetchDataSuccess(api) {
    return {
        type: 'SCHOOLS_FETCH_DATA_SUCCESS',
        api
    };
}

export function schoolsFetchData(url, data) {
    return (dispatch) => {
        dispatch(schoolsAreLoading(true));

        setTimeout(() => {
            axios.get(url, data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(schoolsAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(schoolsFetchDataSuccess(response.data)))
                .catch((error) => {
                    dispatch(shcoolsHaveError(true));
                });
        
               
        }, 1000);
    };
}

