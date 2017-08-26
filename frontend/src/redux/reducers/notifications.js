import { SHOW_NOTE } from '../actions/notificationActions';

const initialState = {
    notifications: [],
    newNote: {
        isNoteVisible: false
    }
}


export default function project(state = initialState, action) {
    switch (action.type) {
        case SHOW_NOTE:
            return {...state,
                newNote: {...state, isNoteVisible: action.payload.show}};
        default:
            return state;
    }
}