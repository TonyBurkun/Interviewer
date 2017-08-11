export function fillFields(name) {
    return {
        type: "FILL",
        payload: name
    };
}

export function clearFields(name) {
    return {
        type: "CLEAR",
        payload: name
    };
}

