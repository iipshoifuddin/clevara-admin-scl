import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export function settingHaveError(bool) {
    return {
        type: 'SETTING_HAVE_ERROR',
        hasError: bool
    };
}

export function settingAreLoading(bool) {
    return {
        type: 'SETTING_ARE_LOADING',
        isLoading: bool
    };
}

export function settingFetchDataSuccess(api) {
    return {
        type: 'SETTING_FETCH_DATA_SUCCESS',
        api
    };
}

export function changePasswordFetchDataSuccess(api) {
    return {
        type: 'CHANGE_PASSWORD_DATA_SUCCESS',
        api
    };
}

export function settingFetchData(url, data) {
    return (dispatch) => {
        dispatch(settingAreLoading(true));

        setTimeout(async() => {
            let valueToken="";
            try {
                const getValueToken = await AsyncStorage.getItem('@access_token')
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
                    dispatch(settingAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(settingFetchDataSuccess(response.data)))
                .catch((error) => {
                    dispatch(settingHaveError(true));
                });
        
               
        }, 1000);
    };
}

export function changePasswordDataFetchData(url, token, data) {
    return (dispatch) => {
        dispatch(settingAreLoading(true));

        // setTimeout(() => {
        //     axios.post(url, data)
        //         .then((response) => {
        //             console.log(response.data);
        //             if (response.status !== 200) {
        //                 throw Error(response.statusText);
        //             }
        //             dispatch(settingAreLoading(false));
        //             return response;
        //         })
        //         .then((response) => dispatch(changePasswordFetchDataSuccess(response.data)))
        //         .catch((error) => {
        //             dispatch(settingHaveError(true));
        //         });
        
               
        // }, 1000);
        setTimeout(() => {
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': token,
                    'My-Custom-Header': 'foobar'
                },
                body: JSON.stringify(data)
            };
            fetch(url, requestOptions)
            .then(response => {
                // console.log(response);
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(settingAreLoading(false));
                return response.json();
            })
            .then(responseJSON => {
                console.log(responseJSON);
                dispatch(changePasswordFetchDataSuccess(responseJSON))
            })
            .catch(()=>{
                dispatch(settingHaveError(true));

            })
            ;        
           
    }, 500);
    };
}

