const initialState = {
    userData: {},
    loggedUser: false
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'DO_LOGIN':
            return {...state, userData: action.payload };

        case 'AUTH_CHECK':
            return {...state, userData: action.payload};

        case 'LOGGED_USER':
            return {...state, loggedUser: action.payload};

        default:
            return state;
    }

}
