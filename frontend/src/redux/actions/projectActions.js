import fetch from "isomorphic-fetch";
// import 'whatwg-fetch';
// import Promise from 'promise-polyfill';
import {showNote} from "../../redux/actions/notificationActions";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const SHOW_PROJECTS = "SHOW_PROJECTS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";


function addNewProject(date) {
    return { type: CREATE_PROJECT, payload: date.data};
}

export function createProject(date) {

    return (dispatch) => {
        fetch("/api/v1/projects",
            {
                method: 'post',
                body: JSON.stringify(date),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(res =>
                res.json()
            )
            .then(date => {
                dispatch(addNewProject(date));
                dispatch(showProjects());
                dispatch(showNote({show: true }))
                setInterval(() => {
                    dispatch(showNote({show: false }))
                }, 4000)
            })
            .catch(function(err) {
                alert('Error:'+ err);
            })
    };
}

function addProjects(projects) {
    return { type: SHOW_PROJECTS, payload: projects};
}

export function showProjects() {
    return (dispatch) => {
        fetch("/api/v1/projects")
            .then(res =>
                res.json()
            )
            .then(projects => {
                dispatch(addProjects(projects.data));
            })
            .catch(function(err) {
                alert('Error:'+ err);
            })
    };
}


function deleteProjects(date) {
    return { type: SHOW_PROJECTS, payload: date};
}

export function removeProject(date) {
    return (dispatch) => {
        fetch('/api/v1/projects',
            {
                method: 'post',
                body: JSON.stringify(date),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res =>
                res.json()
            )
            .then(date => {
                dispatch(deleteProjects(date));
            });
    };
}


export function updateProject() {
    return (dispatch) => {
        dispatch({
            type: UPDATE_PROJECT
        })
    }
}