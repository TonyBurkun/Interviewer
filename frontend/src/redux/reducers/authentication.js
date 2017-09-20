const initialState = {
    user: 'Unknown token'
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'DO_LOGIN':
            return {...state, user: action.payload };

        default:
            return state;
    }

}
