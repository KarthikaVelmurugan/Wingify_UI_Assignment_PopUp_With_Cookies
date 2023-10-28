// function to validate the data
function ValidateData() {
    //Get the name, email address and subscription data from user input box
    var data = getData();
    // Regular expressions to check the valid data
    var user_name_check = /^[a-zA-Z ]{2,30}$/;
    var user_email_check = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var validity = false;

    // Validate the RE matches and   value
    data.user_name.length > 0 ? user_name_check.test(data.user_name) ? (document.getElementById('user_name_error').innerHTML = "", validity = true) : (document.getElementById('user_name_error').innerHTML = "**User name is invalid**", validity = false) : (document.getElementById('user_name_error').innerHTML = "**User name is mandatory**", validity = false);
    data.user_email.length > 0 ? user_email_check.test(data.user_email) ? (document.getElementById('user_email_error').innerHTML = "", validity = true) : (document.getElementById('user_email_error').innerHTML = "**User email is invalid**", validity = false) : (document.getElementById('user_email_error').innerHTML = "**User email is mandatory**", validity = false);
    data.if_subscribe ? (document.getElementById('newsletter_subscription_error').innerHTML = "", validity = true) : (document.getElementById('newsletter_subscription_error').innerHTML = "**Please click to subscribe the newsletter**", validity = false);
    return validity;
}