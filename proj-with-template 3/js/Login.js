class Login {
  login(userid, password) {
    // set it to dbPass bc it will be used alot so variable will be easier to call
    let dbPassword = getCookie(userid);
    // Not in database, User Does not exist
    if (dbPassword == null) {
      return false;
    }
    // Yes in database, User exists
    else {
      // Password matches
      if (dbPassword == password) {
        setCookie("flag", "true"); // Session Validation
        setCookie("whoami", userid); // Current UserName
        return true;
      }
      // Password doesnt match
      else {
        return false;
      }
    }
  }
  logoff() {
    setCookie("flag", "", -1);
    setCookie("whoami", "", -1);
  }
  register(userid, password) {
    //alert(3);
    if (getCookie(userid) == null) {
      // NO
      setCookie(userid, password);
      return true;
    } else {
      // YES
      return false;
    }
  }
}
