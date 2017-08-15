export function setProjectTitleFields(title) {
    return {
        type: "SET_TITLE",
        payload: title
    };
}

export function setProjectDescriptionFields(description) {
    return {
        type: "SET_DESCRIPTION",
        payload: description
    };
}

export function showNote(){
    return {
        type: "SHOW_NOTE",
        payload: true
    };
}