// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDkRsAy8MdAHSlzCcqMbYZ6k-4uJ0nVplc",
  authDomain: "to-do-app-d430c.firebaseapp.com",
  databaseURL: "https://to-do-app-d430c-default-rtdb.firebaseio.com",
  projectId: "to-do-app-d430c",
  storageBucket: "to-do-app-d430c.firebasestorage.app",
  messagingSenderId: "1097174344586",
  appId: "1:1097174344586:web:4cd0b6fa28895490b75e73"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig)


firebase.database().ref("todo").on("child_added" ,function(data){
  
    var liElement = document.createElement("li");

    var liText = document.createTextNode(input.value);

    liElement.appendChild(liText);

    ulElement.appendChild(liElement);

    // create delete button liElement

    var delBtnElement = document.createElement("button");

    var delBtnText = document.createTextNode("Delete");

    delBtnElement.appendChild(delBtnText);

    liElement.appendChild(delBtnElement);

    delBtnElement.setAttribute("onclick", "deleteSingleItem(this)");

    // create edit button liElement

    var editBtnELement = document.createElement("button");

    var editBtnText = document.createTextNode("Edit");

    editBtnELement.appendChild(editBtnText);

    editBtnELement.setAttribute("onclick", "editItem(this)");

    liElement.appendChild(editBtnELement);

    console.log(liElement);

    input.value = "";
  
});







var ulElement = document.getElementById("list");

var input = document.getElementById("todoInput");
function addTodo() {
  if(input.value){
    var key = firebase.database().ref("todo").push().key
    var todoObj = {
      key:key,
      value:input.value,
    }
    firebase.database().ref("todo").child(key).set(todoObj)

  }
}

function deleteAllItems() {
  ulElement.innerHTML = "";
}

// CRUD Operation

// C = CREATE
// R = READ
// U = UPDATE
// D = DELETE

function deleteSingleItem(e) {
  e.parentNode.remove();
}

function editItem(e) {
  var updatedVal = prompt("Enter updated value..");

  //   console.log(e.parentNode.firstChild.nodeValue);

  e.parentNode.firstChild.nodeValue = updatedVal;
}