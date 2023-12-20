document.writeln("<li>");
let flag = getCookie("flag");
if (flag == "1") {
  link = "logoff.html";
  linkdisplay = "Logoff";
} else {
  link = "login.html";
  linkdisplay = "Login";
}
document.writeln(`<a href="${link}">${linkdisplay}</a>`);
document.writeln("</li>");
document.writeln(`<li><a href="products.html">Products</a></li>`);
document.writeln(`<li><a href="contact.html">Contact Us</a></li>`);
document.writeln(`<li><a href="about.html">About Us</a></li>`);
document.writeln(`<li><a href="logoff.html">Log Off</a></li>`);
