import {CREATE_PROJECT, SHOW_PROJECTS, REMOVE_PROJECT} from "../actions/projectActions";

const initialState = {
	projects: [],
	newProject: {
		projectTitle: "initTitle",
	    projectDescription: "initDiscr",
	}
}


export default function project(state = initialState, action) {

    switch (action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                newProject: {...state,
                    projectTitle: action.payload.title,
                    projectDescription: action.payload.description
                }
            };
        case SHOW_PROJECTS:
            return { ...state, projects: action.payload};
        default:
            return state;
    }
}