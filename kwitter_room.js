var firebaseConfig = {
      apiKey: "AIzaSyAw7Nuc-15EcroS3KOaYxSyraEWfmzUjZE",
      authDomain: "kwitter-13b7b.firebaseapp.com",
      projectId: "kwitter-13b7b",
      storageBucket: "kwitter-13b7b.appspot.com",
      messagingSenderId: "394772099861",
      appId: "1:394772099861:web:61fb8cf87a16ebd3476f1c",
      databaseURL :"https://kwitter-13b7b-default-rtdb.firebaseio.com/",
      measurementId: "G-2M8XCCECVX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var name= localStorage.getItem("username");
    document.getElementById('user_name').innerHTML=' Welcome ' + name + "!";
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("itsworking " + Room_names);
  var row ="<div class='room_name' id=" + Room_names +" onclick='redirecttoroom(this.id)'> #" + Room_names + "</div>";
  document.getElementById("output").innerHTML += row;



      //End code
      });});}
getData();
function logout(){
      
localStorage.removeItem('username');
localStorage.removeItem('room_name');
window.location = 'index.html';
}
function addroom(){
room_var = document.getElementById("roomname").value;
firebase.database().ref('/').child(room_var).update({
      addRname: "addingRname"

    });
    localStorage.setItem('room_name', room_var);
    window.location='kwitter_page.html';
}
function redirecttoroom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}