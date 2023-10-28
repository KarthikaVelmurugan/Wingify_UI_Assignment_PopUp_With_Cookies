//function to control the popup window visible action
function PopUp(hideOrshow) {
  if (hideOrshow == 'hide') { document.getElementById("popup").style.display = "none"; document.body.style.backgroundColor = "white" }
  else document.getElementById('popup').removeAttribute('style');
}


// set page
function setPage() {
  // Get Cookie
  var user_name = getCookie('user_name');
  var user_email = getCookie('user_email');
  var if_subscribe = getCookie('if_subscribe');
  var deleteCookieBtn;

  //function to check whether the user view this screen in desktop or mobile mode.
  var isMobile = window.orientation > 1;
  user_name == null ? isMobile ? setTimeout(function () {
    PopUp('show');
  }, 5000) //mobile
    : PopUp('show') : (PopUp('hide'), document.getElementById("cookie-present").innerHTML = "Your data is stored in cookie." + "<br/>" + "user name = " + user_name + "<br/>" + "user email = " + user_email + "<br/>" + "If user subscribe the newsletter = " + (if_subscribe ? "yes" : "no"), deleteCookieBtn = document.createElement('button'), deleteCookieBtn.textContent = "Delete Cookie", document.body.appendChild(deleteCookieBtn), deleteCookieBtn.addEventListener('click', () => {
      deleteCookie("user_name", user_name);
      deleteCookie("user_email", user_email);
      deleteCookie("if_subscribe", if_subscribe);
      window.location.reload();
    }));
  ; //desktop
}