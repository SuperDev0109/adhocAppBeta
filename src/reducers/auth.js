const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
}

function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
}

export default authReducer;