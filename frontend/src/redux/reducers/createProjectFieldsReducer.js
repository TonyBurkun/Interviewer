const createProjectFieldsReducer = (state = {
    projectTitle: "",
    projectDescription: "",
    isNoteVisible: false
}, action) => {
    switch (action.type) {
        case "SET_TITLE":
            state = { //"state" here is a new js object
                ...state, // "..." takes all the properties from the "state" object from 1st line
                projectTitle: action.payload,
            };
            break;

        case "SET_DESCRIPTION":
            state = {
                ...state,
                projectDescription: action.payload,
            };
            break;

        case "SHOW_NOTE":
            state = {
                ...state,
                isNoteVisible:action.payload,
            };
            break;
    }
    return state;
};

export default createProjectFieldsReducer;