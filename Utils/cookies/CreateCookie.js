// Create Cookie
function CreateCookie() {
    var data = getData();
    setCookie('user_name', data.user_name, 365);
    setCookie('user_email', data.user_email, 365);
    setCookie('if_subscribe', data.if_subscribe, 365);
    setPage()
}