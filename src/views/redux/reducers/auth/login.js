export function loginHaveError(state = false, action) {
    switch (action.type) {
        case 'LOGIN_HAVE_ERROR':
            console.log(action);
            return action.hasError;
        default:
            return state;
    }
}

export function loginAreLoading(state = false, action) {
    switch (action.type) {
        case 'LOGIN_ARE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function login(state = [], action){
    switch (action.type) {
        case 'LOGIN_FETCH_DATA_SUCCESS':
            return action.api;
        default:
            return state;
    }
}
