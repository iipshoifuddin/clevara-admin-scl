import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export function majorHaveError(bool) {
    return {
        type: 'MAJOR_HAVE_ERROR',
        hasError: bool
    };
}

export function majorAreLoading(bool) {
    return {
        type: 'MAJOR_ARE_LOADING',
        isLoading: bool
    };
}

export function majorFetchDataSuccess(api) {
    return {
        type: 'MAJOR_FETCH_DATA_SUCCESS',
        api
    };
}

export function majorDeletehDataSuccess(api) {
    return {
        type: 'MAJOR_DELETE_FETCH_DATA_SUCCESS',
        api
    };
}


export function majorFetchData(url, data) {
    return (dispatch) => {
        dispatch(majorAreLoading(true));

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
                    dispatch(majorAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(majorFetchDataSuccess(response.data)))
                .catch((error) => {
                    dispatch(majorHaveError(true));
                });
        
               
        }, 1000);
    };
}

export function majorDeletehData(url, data) {
    return (dispatch) => {
        dispatch(majorAreLoading(true));

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
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        // 'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + valueToken,
                        'My-Custom-Header': 'foobar'
                    },
                    // body: JSON.stringify({ title: 'React POST Request' })
                    body: data,
                };
                // console.log(url);
                // console.log(token);
                // console.log(data);
                for (var pair of data.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]); 
                }
                fetch(url, requestOptions)
                .then(response => {
                    // console.log(response);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(majorAreLoading(false));
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                    // window.location.href = "/home";
                    dispatch(majorDeletehDataSuccess(responseJSON))
                })
                .catch(()=>{
                    dispatch(majorHaveError(true));
                })
                ;        
               
        }, 500);
    };
}