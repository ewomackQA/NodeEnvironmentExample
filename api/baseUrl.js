export default function getBaseUrl() {
    return getQueryStringParameterByName("useMockApi") ? "http://localhost:3001/" : "/";
}

//given "useMockApi" and  http://localhost:3000/?useMockApi=true , will retrieve the "true" part of the param.
function getQueryStringParameterByName(name, url) {
    if (!url) { url = window.location.href; }
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) { return null; }
    if (!results[2]) { return ""; }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}