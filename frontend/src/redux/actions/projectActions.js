export const CREATE_PROJECT = 'CREATE_PROJECT';
export const SHOW_PROJECTS = 'SHOW_PROJECTS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';




export function createProject(date) {
  debugger
  return {
    type: 'CREATE_PROJECT',
    payload: date
  }
}

export function showProjects() {
  return (dispatch) => {
    dispatch({
      type: SHOW_PROJECTS
    })
  }
}

export function removeProject() {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PROJECT
    })
  }
}

export function updateProject() {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PROJECT
    })
  }
}
