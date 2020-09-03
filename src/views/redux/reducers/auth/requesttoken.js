export function requestTokenHaveError(state = false, action) {
    switch (action.type) {
        case 'REQUEST_TOKEN_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function  requestTokenAreLoading(state = false, action) {
    switch (action.type) {
        case 'REQUEST_TOKEN_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function  requestToken(state = [], action) {
    switch (action.type) {
        case 'REQUEST_TOKEN_FETCH_DATA_SUCCESS':
            console.log(action);
            return [action];

        default:
            return state;
    }
}
