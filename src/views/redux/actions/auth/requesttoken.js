import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export function requestTokenHaveError(bool) {
    return {
        type: 'REQUEST_TOKEN_HAVE_ERROR',
        hasError: bool
    };
}

export function requestTokenAreLoading(bool) {
    return {
        type: 'REQUEST_TOKEN_ARE_LOADING',
        isLoading: bool
    };
}

export function requestTokenFetchDataSuccess(api) {
    return {
        type: 'REQUEST_TOKEN_FETCH_DATA_SUCCESS',
        api
    };
}

export function requestTokenFetchData(url, data) {
    return (dispatch) => {
        dispatch(requestTokenAreLoading(true));

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
                    dispatch(requestTokenAreLoading(false));
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON.access_token);
                    const storeData = async (value) => {
                        try {
                          await AsyncStorage.setItem('@access_token', value);
                        } catch (e) {
                          // saving error
                        }
                    }
                    storeData(responseJSON.access_token);
                    dispatch(requestTokenFetchDataSuccess(responseJSON))

                })
                .catch(()=>{
                    dispatch(requestTokenHaveError(true));

                })
                ;        
               
        }, 500);
    };
}