import fetch from "isomorphic-fetch";

export function doLogin(data) {
    console.log(data);
    return () => {
        fetch('/auth/sign_in',
            {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(function (response) {
                console.log(response);

                return response.json();
            })
            .catch(alert);
    }

    // return {
    //     type: 'DO_LOGIN',
    //     payload: data
    // }
}