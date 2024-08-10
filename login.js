// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDjah-keMAmXmTvthNVGWBNLvt0kLoXLMk",
  authDomain: "akshaya-patraa.firebaseapp.com",
  projectId: "akshaya-patraa",
  storageBucket: "akshaya-patraa.appspot.com",
  messagingSenderId: "357014106040",
  appId: "1:357014106040:web:9c5b923d23b1af4183a94d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const submit = document.getElementById("login");
submit.addEventListener("click", function (event) {
    
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("logged in Successfuly");
      window.location.assign("http://127.0.0.1:5500/Home.html");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Enter Correct Credentials")
    });


  



});
