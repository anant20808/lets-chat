var firebaseConfig = {
  apiKey: "AIzaSyD3ugPUBsVl2mpH6-c0ivAT5ORtNlhTebs",
  authDomain: "kwitter-b7965.firebaseapp.com",
  databaseURL: "https://kwitter-b7965-default-rtdb.firebaseio.com",
  projectId: "kwitter-b7965",
  storageBucket: "kwitter-b7965.appspot.com",
  messagingSenderId: "883021737405",
  appId: "1:883021737405:web:00e6285a043c29657736d4",
  measurementId: "G-9MRHRDLP86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML= "Welcome " + username + "!";


function Addroom(){

  roomname = document.getElementById("addroom").value;
  localStorage.setItem("roomname",roomname);
  firebase.database().ref("/").child(roomname).update({
    purpose : "adding roomname"
  })
}


function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname")
window.location="index.html";

}
