import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

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

export function facilitiesDeletehDataSuccess(api) {
    return {
        type: 'SCHOOLS_FETCH_DATA_SUCCESS',
        api
    };
}


export function schoolsFetchData(url, data) {
    return (dispatch) => {
        dispatch(schoolsAreLoading(true));

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

export function facilitiesDeletehData(url, token, data) {
    return (dispatch) => {
        // dispatch(logoutAreLoading(true));

        setTimeout(() => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        // 'Content-Type': 'application/json',
                        'Authorization': token,
                        'My-Custom-Header': 'foobar'
                    },
                    // body: JSON.stringify({ title: 'React POST Request' })
                    body: data,
                };
                // console.log(data);
                for (var pair of data.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]); 
                }
                fetch(url, requestOptions)
                .then(response => {
                    // console.log(response);
                    // if (response.status !== 200) {
                    //     throw Error(response.statusText);
                    // }
                    // dispatch(logoutAreLoading(false));
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                    // window.location.href = "/home";
                    dispatch(facilitiesDeletehDataSuccess(responseJSON))
                })
                .catch(()=>{
                    // dispatch(logoutHaveError(true));

                })
                ;        
               
        }, 500);
    };
}
