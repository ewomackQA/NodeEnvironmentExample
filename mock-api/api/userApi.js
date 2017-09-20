import getBaseUrl from "./baseUrl";
const baseUrl = getBaseUrl();

let onSuccess = (response) => {
    return response.json();
};
let onError = (error) => {
    console.log(error);
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}
function del(url) {
    const request = new Request(baseUrl + url, {
        method: "DELETE"
    });
    return fetch(request).then(onSuccess, onError);
}

export function getUsers() {
    return get("users");
}

export function deleteUser(id) {
    return del(`users/${id}`);
}