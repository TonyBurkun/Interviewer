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

export function showProjects() {

    return (dispatch) => {
        fetch('/api/v1/projects')
            .then(res =>
                res.json()
            )
            .then(projects => {
                console.log(projects)
                debugger
                return {
                    type: 'SHOW_PROJECTS',
                    payload: projects.data
                };
            });
    };
    // window.fetch('/api/v1/projects')
    //     .then(
    //         function(response) {
    //             if (response.status !== 200) {
    //                 console.log('Looks like there was a problem. Status Code: ' +
    //                     response.status);
    //             }
    //             response.json().then(function(projects) {
    //                 console.log(projects.data)
    //                 return { type: SHOW_PROJECTS, payload: projects};
    //             });
    //         }
    //     )
    //     .catch(function(err) {
    //         console.log('Fetch Error:' , err);
    //     })
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