const createProjectReducer = (state = {
    projectTitle: "",
    projectDescription: ""
}, action) => {
    switch (action.type) {
        case "FILL":
            state = { //state here is a new js object
                ...state, // takes all the properties from the state object from 1st line
                projectTitle: action.payload,
                projectDescription: action.payload
            };
            break;
        case "CLEAR":
            state = {
                ...state,
                projectTitle: action.payload,
                projectDescription: action.payload
            };
            break;
    }
    return state;
};

export default createProjectReducer;