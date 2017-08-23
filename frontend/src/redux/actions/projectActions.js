import fetch from 'isomorphic-fetch';

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const SHOW_PROJECTS = 'SHOW_PROJECTS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';


export function createProject(date) {
    return {
        type: 'CREATE_PROJECT',
        payload: date
    }
}

function addProjects(projects) {
    return { type: SHOW_PROJECTS, payload: projects};
}

export function showProjects() {
    return (dispatch) => {
        fetch('/api/v1/projects')
            .then(res =>
                res.json()
            )
            .then(projects => {
                dispatch(addProjects(projects.data));
            });
    };
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