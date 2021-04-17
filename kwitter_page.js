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
    var message;
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val();
      if(childKey != "addRname") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name= message_data['name'];
var msg= message_data['message1'];
var likes=message_data['like'];
var dt="<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
var mt="<h4 class='message_h4'>" + msg + "</h4>";
var lt="<button class='btn-warning btn' id=" + firebase_message_id + " value=" + likes + " onclick='increase(this.id)'>";
var sL= "<span class='glyphicon glyphicon-thumbs-up' > Like :- " + likes + "</span></button><hr>";
var row2 = dt + mt + lt + sL;
document.getElementById("output").innerHTML = row2;
//End code
      } });  }); }
var user_name= localStorage.getItem("username");
var room_name= localStorage.getItem("room_name");
getData();
function send(){
message= document.getElementById("why45").value;
firebase.database().ref(room_name).push({
name:user_name,
message1:message,
like:0

});
document.getElementById("why45").value="";


}
function logout(){
      
      localStorage.removeItem('username');
      localStorage.removeItem('room_name');
      window.location = 'index.html';
}
function increase(idkillsme){
console.log("Click on the Like Button, you will get $100" + " " + idkillsme); 
var nolikes = document.getElementById(idkillsme).value;
var updatedlikes = Number(nolikes) + 1 ;
firebase.database().ref(room_name).child(idkillsme).update({

      like:updatedlikes
});
}