
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC0avDMB0dpLzO5muJARtBb7kmOwPKXVRk",
      authDomain: "clase100-49ed6.firebaseapp.com",
      databaseURL: "https://clase100-49ed6-default-rtdb.firebaseio.com",
      projectId: "clase100-49ed6",
      storageBucket: "clase100-49ed6.appspot.com",
      messagingSenderId: "138740232232",
      appId: "1:138740232232:web:7765793c4832fcb05bc51d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de la sala"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  console.log("Nombre de la sala: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //Finaliza el código
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
