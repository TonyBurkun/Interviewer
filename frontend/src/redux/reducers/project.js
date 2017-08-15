import { CREATE_PROJECT, SHOW_PROJECTS, REMOVE_PROJECT, UPDATE_PROJECT } from '../actions/projectActions';

const initialState = {
	projects: [],
	newProject: {
		projectTitle: "asd",
	    projectDescription: "dsad",
	    isNoteVisible: false
	}
}


export default function project(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT:
      debugger
      return Object.assign({}, state);
    case SHOW_PROJECTS:
      return { ...state, email: action.user_info.email,  auth: true};
    case REMOVE_PROJECT:
      return { ...state, email: '', auth: false };
    case UPDATE_PROJECT:
      return { ...state, email: '', auth: false };
    default:
      return state;
  }
}