var a;
function setname(){
a = document.getElementById("userlogin").value;
localStorage.setItem("username", a);
window.location="kwitter_room.html";


}