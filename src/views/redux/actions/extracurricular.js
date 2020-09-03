import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export function extracurricularHaveError(bool) {
    return {
        type: 'EXTRACURRICULAR_HAVE_ERROR',
        hasError: bool
    };
}

export function extracurricularAreLoading(bool) {
    return {
        type: 'EXTRACURRICULAR_ARE_LOADING',
        isLoading: bool
    };
}

export function extracurricularFetchDataSuccess(api) {
    return {
        type: 'EXTRACURRICULAR_FETCH_DATA_SUCCESS',
        api
    };
}

export function extracurricularDeletehDataSuccess(api) {
    return {
        type: 'EXTRACURRICULAR_DELETE_FETCH_DATA_SUCCESS',
        api
    };
}


export function extracurricularFetchData(url, data) {
    return (dispatch) => {
        dispatch(extracurricularAreLoading(true));

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
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(extracurricularAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(extracurricularFetchDataSuccess(response.data)))
                .catch((error) => {
                    dispatch(extracurricularHaveError(true));
                });
        
               
        }, 1000);
    };
}

export function extracurricularDeletehData(url, token, data) {
    return (dispatch) => {
        dispatch(extracurricularAreLoading(true));

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
                console.log(url);
                console.log(token);
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
                    dispatch(extracurricularAreLoading(false));
                    return response.json();
                })
                .then(responseJSON => {
                    console.log(responseJSON);
                    // window.location.href = "/home";
                    dispatch(extracurricularDeletehDataSuccess(responseJSON))
                })
                .catch(()=>{
                    dispatch(extracurricularHaveError(true));
                })
                ;        
               
        }, 500);
    };
}
