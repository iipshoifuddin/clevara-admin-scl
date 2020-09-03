import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export function checkLoginHaveError(bool, api) {
    return {
        type: 'CHECK_LOGIN_HAVE_ERROR',
        hasError: bool,
        api
    };
}

export function checkLoginAreLoading(bool) {
    return {
        type: 'CHECK_LOGIN_ARE_LOADING',
        isLoading: bool
    };
}

export function checkLoginFetchDataSuccess(api) {
    return {
        type: 'CHECK_LOGIN_FETCH_DATA_SUCCESS',
        api
    };
}

export function checkLoginFetchData(url) {
    return (dispatch) => {
        dispatch(checkLoginAreLoading(true));

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
            const dataPost ={
                headers: {
                    'Authorization': 'Bearer ' + valueToken,
                }
            }    
            axios.get(url, dataPost)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(checkLoginAreLoading(false));
                    return response;
                })
                .then((response) => {
                    dispatch(checkLoginFetchDataSuccess(response.data))
                })
                .catch((error) => {
                    dispatch(checkLoginHaveError(true, error));
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                        console.log(error.response.status);

                        } 
                    console.log(error.config);
                });
        
               
        }, 1000);
    };
}