import axios from 'axios';

export function shcoolsUpdateHaveError(bool) {
    return {
        type: 'SCHOOLS_HAVE_ERROR',
        hasError: bool
    };
}

export function schoolsUpdateAreLoading(bool) {
    return {
        type: 'SCHOOLS_ARE_LOADING',
        isLoading: bool
    };
}

export function schoolsUpdateFetchDataSuccess(api) {
    return {
        type: 'SCHOOLS_FETCH_DATA_SUCCESS',
        api
    };
}

export function schoolsUpdateFetchData(url, token, data, data2 ) {
    return (dispatch) => {
        dispatch(schoolsUpdateAreLoading(true));

        setTimeout(() => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': token,
                        'My-Custom-Header': 'foobar'
                    },
                    body: JSON.stringify(data),
                    body: data2,     
                };
                fetch(url, requestOptions)
                .then(response => {
                    // console.log(response);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(schoolsUpdateAreLoading(false));
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                    dispatch(schoolsUpdateFetchDataSuccess(responseJSON));

                })
                .catch(()=>{
                    dispatch(shcoolsUpdateHaveError(true));

                })
                ;        
               
        }, 500);
    };
}
