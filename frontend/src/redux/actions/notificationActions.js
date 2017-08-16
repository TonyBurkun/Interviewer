export const SHOW_NOTE = 'SHOW_NOTE';


export function showNote(note) {
    debugger
    return {
        type: 'SHOW_NOTE',
        payload: note
    }
}