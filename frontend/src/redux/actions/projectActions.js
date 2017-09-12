import fetch from "isomorphic-fetch";
import {makeNote, showNote} from "./notificationActions";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const SHOW_PROJECTS = "SHOW_PROJECTS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const SET_PROJECT = "SET_PROJECT";


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
                dispatch(makeNote(
                    {
                        status: "success",
                        text: "Project '" + date.data.title.slice(0, 20) + "' ... was created!"
                    }
                ))
            })
            .catch(function (err) {
                dispatch(showNote(
                    {
                        status: "danger",
                        text: "Error: "+ err
                    }
                ));
            })
    }
}


function addProjects(projects) {
    return { type: SHOW_PROJECTS, payload: projects};
}

function setCurrentProject(project) {
    return { type: SET_PROJECT, payload: project};
}

export function showProjects() {
    return (dispatch) => {
        fetch("/api/v1/projects",
            {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(res =>
                res.json()
            )
            .then(projects => {
                dispatch(addProjects(projects.data));
            })
            .catch(function(err) {
                dispatch(showNote(
                    {
                        status: "danger",
                        text: "Error: "+ err
                    }
                ));
            })
    };
}

export function getProjects(id) {
    return (dispatch) => {
        fetch("/api/v1/projects/" + id)
            .then(res =>
                res.json()
            )
            .then(project => {
                dispatch(setCurrentProject(project.data));
            })
            .catch(function(err) {
                dispatch(showNote(
                    {
                        status: "danger",
                        text: "Error: "+ err
                    }
                ));
            })
    };
}

export function removeProject(date) {
    return (dispatch) => {
        fetch('/api/v1/projects/' + date.id,
            {
                method: 'delete',
                body: JSON.stringify(date),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res =>
                res.json()
            )
            .then(date => {
                dispatch(showProjects());
            })
            .catch(function(err) {
                dispatch(showNote(
                    {
                        status: "danger",
                        text: "Error: "+ err
                    }
                ));
            });
    };
}

export function updateProject(date) {
    return (dispatch) => {
        fetch('/api/v1/projects/' + date.id,
            {
                method: 'put',
                body: JSON.stringify(date),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res =>
                res.json()
            )
            .then(date => {
                dispatch(showProjects());
            })
            .catch(function(err) {
                dispatch(showNote(
                    {
                        status: "danger",
                        text: "Error: "+ err
                    }
                ));
            });
    };
}

