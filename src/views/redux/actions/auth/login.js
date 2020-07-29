import axios from 'axios';

export function loginHaveError(bool) {
    return {
        type: 'LOGIN_HAVE_ERROR',
        hasError: bool
    };
}

export function loginAreLoading(bool) {
    return {
        type: 'LOGIN_ARE_LOADING',
        isLoading: bool
    };
}

export function loginFetchDataSuccess(api) {
    return {
        type: 'LOGIN_FETCH_DATA_SUCCESS',
        api
    };
}

export function disableLoginError(url) {
    return (dispatch) => {
        dispatch(loginHaveError(false));
    }
}

export function loginFetchData(url, data) {
    return (dispatch) => {
        dispatch(loginAreLoading(true));

        setTimeout(() => {
            axios.post(url, data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(loginAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(loginFetchDataSuccess(response.data)))
                .catch((error) =>{
                        dispatch(loginHaveError(true));
                        dispatch(loginAreLoading(false));
                    }
                );
                // .catch(function (error) {
                //     if (error.response) {
                //       // The request was made and the server responded with a status code
                //       // that falls out of the range of 2xx
                //       console.log(error.response.data);
                //       console.log(error.response.status);
                //       console.log(error.response.headers);
                //       console.log(error.response.status);

                //     } 
                //   console.log(error.config);
                // });       
        }, 3000);
    };
}
