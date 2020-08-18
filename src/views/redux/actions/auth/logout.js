import AsyncStorage from '@react-native-community/async-storage';

export function logoutHaveError(bool) {
    return {
        type: 'LOGOUT_HAVE_ERROR',
        hasError: bool
    };
}

export function logoutAreLoading(bool) {
    return {
        type: 'LOGOUT_ARE_LOADING',
        isLoading: bool
    };
}

export function logoutFetchDataSuccess(api) {
    return {
        type: 'LOGOUT_FETCH_DATA_SUCCESS',
        api
    };
}

export function logoutFetchData(url, data) {
    return (dispatch) => {
        dispatch(logoutAreLoading(true));

        setTimeout(() => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': data,
                        'My-Custom-Header': 'foobar'
                    },
                    body: JSON.stringify({ title: 'React POST Request' })
                };
                fetch(url, requestOptions)
                .then(response => {
                    // console.log(response);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(logoutAreLoading(false));
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                    const removeKeyFromLocal=async()=>{
                        try {
                            await AsyncStorage.removeItem('@access_token');
                            return true;
                        }
                        catch(exception) {
                            return false;
                        }
                    }
                    removeKeyFromLocal();
                    window.location.href="/";
                    dispatch(logoutFetchDataSuccess(responseJSON))
                })
                .catch(()=>{
                    dispatch(logoutHaveError(true));

                })
                ;        
               
        }, 500);
    };
}