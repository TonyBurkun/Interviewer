import fetch from "isomorphic-fetch";
import {makeNote, showNote} from "./notificationActions";

export function doLogin(data) {

    function addUserData(data){
        return {
            type: 'DO_LOGIN',
            payload: data.data
        }
    }

    function loggedUser(data) {
        return {
            type: 'LOGGED_USER',
            payload: data
        }
    }
    return (dispatch) => {
        fetch('/auth/sign_in',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(function (response) {

                switch (response.status){
                    case 200:
                    case 201:
                        let accessToken = response.headers.get('access-token'),
                            tokenExpiry = response.headers.get('expiry');

                        localStorage.setItem('token', accessToken);
                        localStorage.setItem('tokenExpiry', tokenExpiry);


                        dispatch(loggedUser(true));
                        return response.json();

                    case 401:
                        return response.json();



                    default:
                        dispatch(loggedUser(false));
                        return {data: 'no-data'};
                }

            })
            .then((data) => {

            if (data.data === undefined){
                console.log(data.errors[0]);
                alert(data.errors[0]);
            } else{
                dispatch(addUserData(data));
            }



            })
            .catch(alert);
    }

}

export function authorizationCheck() {

    let accessToken = localStorage.getItem('token'),
        tokenExpiry = localStorage.getItem('tokenExpiry'),
        locationTarget = '#/login',
        currentDate = new Date().getTime(),
        currentDateInSeconds = Math.floor(currentDate/1000);

    if (accessToken !== null){
        if (tokenExpiry !== null){
            if (tokenExpiry < currentDateInSeconds){
                window.location.replace(locationTarget);
                localStorage.removeItem('token');
                localStorage.removeItem('tokenExpiry');

            }
        } else {
            window.location.replace(locationTarget);
        }
    } else {
        window.location.replace(locationTarget);
    }


    return {
        type: 'AUTH_CHECK',
        payload: 'no-data'
    }

}

