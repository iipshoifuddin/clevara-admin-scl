import axios from 'axios';

export function shcoolsUpdateHaveError(bool) {
    return {
        type: 'SCHOOLS_UPDATE_HAVE_ERROR',
        hasError: bool
    };
}

export function schoolsUpdateAreLoading(bool) {
    return {
        type: 'SCHOOLS_UPDATE_ARE_LOADING',
        isLoading: bool
    };
}

export function schoolsUpdateFetchDataSuccess(api) {
    return {
        type: 'SCHOOLS_UPDATE_FETCH_DATA_SUCCESS',
        api
    };
}

export function schoolsUpdateFetchData(url, token, data ){
    return (dispatch) => {
        dispatch(schoolsUpdateAreLoading(true));

        setTimeout(async() => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        // 'Content-Type': 'application/json',
                        // "Accept" : "application/json",
                        'Authorization': token,
                        'My-Custom-Header': 'foobar',
                    },
                    // body: JSON.stringify(data),
                    body: data,                    
                };
                
                await fetch(url, requestOptions)
                .then(response => {
                    // console.log(response.json());
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
                .catch((error)=>{
                    dispatch(shcoolsUpdateHaveError(true));

                });
                
               
        }, 500);
    };
}

