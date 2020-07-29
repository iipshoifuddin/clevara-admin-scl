import axios from 'axios';

export function fotoHaveError(bool) {
    return {
        type: 'FOTO_HAVE_ERROR',
        hasError: bool
    };
}

export function fotoAreLoading(bool) {
    return {
        type: 'FOTO_ARE_LOADING',
        isLoading: bool
    };
}

export function fotoFetchDataSuccess(api) {
    return {
        type: 'FOTO_FETCH_DATA_SUCCESS',
        api
    };
}

export function fotoFetchData(url, token, data) {
    return (dispatch) => {
        dispatch(fotoAreLoading(true));

        setTimeout(() => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        // 'Content-Type': 'application/json',
                        'Authorization': token,
                        'My-Custom-Header': 'imagebar'
                    },
                    body:data
                    // body: JSON.stringify({ title: 'React POST Request' })
                };
                fetch(url, requestOptions)
                .then(response => {
                    // console.log(response);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(fotoAreLoading(false));
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                    dispatch(fotoFetchDataSuccess(responseJSON))

                })
                .catch(()=>{
                    dispatch(fotoHaveError(true));

                })
                ;        
               
        }, 500);
    };
}