import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export function fotoDataHaveError(bool) {
    return {
        type: 'FOTO_DATA_HAVE_ERROR',
        hasError: bool
    };
}

export function fotoDataAreLoading(bool) {
    return {
        type: 'FOTO_DATA_ARE_LOADING',
        isLoading: bool
    };
}

export function fotoDataFetchDataSuccess(api) {
    return {
        type: 'FOTO_DATA_FETCH_DATA_SUCCESS',
        api
    };
}

export function fotoDataFetchData(url, data) {
    return (dispatch) => {
        dispatch(fotoDataAreLoading(true));

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
                    dispatch(fotoDataAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(fotoDataFetchDataSuccess(response.data)))
                .catch((error) => {
                    dispatch(fotoDataHaveError(true));
                });
        
               
        }, 1000);
    };
}

export function fotoFetchDeletehData(url, data) {
    return (dispatch) => {
        dispatch(fotoDataAreLoading(true));

        setTimeout(() => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': data,
                        'My-Custom-Header': 'foobar'
                    },
                    body: JSON.stringify({ title: 'React POST Request' })
                    // body: data,
                };
                fetch(url, requestOptions)
                .then(response => {
                    // console.log(response);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(fotoDataAreLoading(false));
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                    // window.location.href = "/home";
                    dispatch(fotoDataFetchDataSuccess(responseJSON))
                })
                .catch(()=>{
                    dispatch(fotoDataHaveError(true));

                })
                ;        
               
        }, 500);
    };
}