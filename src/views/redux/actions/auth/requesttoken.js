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

        setTimeout(async() => {
                let valueToken="";

                try {
                    const getValueToken = await AsyncStorage.getItem('@access_token');
                    if(getValueToken !== null) {
                        valueToken+=getValueToken;
                    }
                } 
                catch(e) {
                    // error reading value
                }
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        // 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${valueToken}`,
                        'My-Custom-Header': 'foobar'
                    },
                    // body: JSON.stringify({ title: 'React POST Request' })
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
                    console.log(responseJSON);
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
                .catch((error)=>{
                    console.log(error);
                    // if (error.response) {
                    //     console.log(error.response);
                    //     console.log(error.response.data);

                        // if(error.response.status === 401){
                            // window.location.href = "/logout";
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
                        // }
                    // }
                    dispatch(requestTokenHaveError(true));
                })
                ;        
               
        }, 500);
    };
}