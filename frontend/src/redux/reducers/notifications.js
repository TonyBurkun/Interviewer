import { SHOW_NOTE, DISPLAY_NOTE, HIDE_NOTE } from '../actions/notificationActions';

const initialState = {
    notifications: [],
    newNote: {
        isNoteVisible: false
    }
};


export default function project(state = initialState, action) {
    switch (action.type) {
        case SHOW_NOTE:
            return {...state,
                newNote: {...state, isNoteVisible: action.payload.show}};
        case DISPLAY_NOTE:
            return {...state,
                notifications: [...state.notifications, action.payload]};
        case HIDE_NOTE:
            return {...state,
                notifications: [...state.notifications, action.payload]};
        default:
            return state;
    }
}