
function get(url) {
    return fetch(url).then((response) => {
        return response.json();
    }, (error) => {
        console.log(error);
    });
}

export function getUsers() {
    return get("users");
}