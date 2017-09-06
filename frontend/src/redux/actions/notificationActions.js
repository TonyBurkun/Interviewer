export const SHOW_NOTE = 'SHOW_NOTE';
export const DISPLAY_NOTE = 'DISPLAY_NOTE';
export const HIDE_NOTE = 'HIDE_NOTE';


export function showNote(note) {
    return {
        type: 'SHOW_NOTE',
        payload: note
    }
}


export function makeNote(note) {
    return (dispatch) => {
        dispatch(displayNote(note));
        //setInterval(() => {
            dispatch(hideNote({status: note.status, text: note.text, show: false}));
        //}, 4000)
    }
}


export function displayNote(note) {
    return {
        type: 'DISPLAY_NOTE',
        payload: note
    }
}

export function hideNote(note) {
    return {
        type: 'HIDE_NOTE',
        payload: note
    }
}