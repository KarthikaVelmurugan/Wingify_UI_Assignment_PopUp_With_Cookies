// Get User Data from the user input
function getData() {
    var data = {};
    data['user_name'] = document.getElementById("user-name").value;
    data['user_email'] = document.getElementById("user-email").value;
    data['if_subscribe'] = document.getElementById("newsletter").checked;
    return data;
}