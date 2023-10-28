// Store data
function StoreData() {
    var ifAllValidate = ValidateData();
    var user_name = getCookie('user_name');
    ifAllValidate && user_name == null ? (CreateCookie()) : setPage();
}
