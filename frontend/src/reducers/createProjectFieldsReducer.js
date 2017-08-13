const createProjectFieldsReducer = (state = {
    projectTitle: "",
    projectDescription: ""
}, action) => {
    switch (action.type) {
        case "TITTLE":
            state = { //"state" here is a new js object
                ...state, // "..." takes all the properties from the "state" object from 1st line
                projectTitle: action.payload,
            };
            break;
        case "DESCRIPTION":
            state = {
                ...state,
                projectDescription: action.payload,
            };
            break;
    }
    return state;
};

export default createProjectFieldsReducer;