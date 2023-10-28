// delete cookie
function deleteCookie(name, value) {
    document.cookie = name + "=" + (value || "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT" + "; path=/";
}