export function setProjectTitleFields(title) {
    return {
        type: "SET_TITLE",
        payload: title
    };
}

export function setProjectDescriptionFields(description) {
    debugger
    return {
        type: "SET_DESCRIPTION",
        payload: description
    };
}

export function showNote(){
    debugger
    return {
        type: "SHOW_NOTE",
        payload: true
    };
}

export function createNewProject() {
    return {
        type: "SHOW_NOTE",
        payload: true
    };
}