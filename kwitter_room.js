// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDMVifpR4MTWtgoJ8RdNZYKGlsLXMjiIG4",
      authDomain: "letschat-web-app---1-b4812.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-b4812-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-b4812",
      storageBucket: "letschat-web-app---1-b4812.appspot.com",
      messagingSenderId: "248921804267",
      appId: "1:248921804267:web:d7459541f2182f609addae"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            
            });

            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
            
            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            
            })
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirecToroomname(name)
{
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html";
}