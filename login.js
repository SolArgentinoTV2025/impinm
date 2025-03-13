import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAlhRnpG2BOFVcfEcGUHPxNDG_kyyooF7o",
    authDomain: "imperio-inmobiliario-3567a.firebaseapp.com",
    projectId: "imperio-inmobiliario-3567a",
    storageBucket: "imperio-inmobiliario-3567a.appspot.com",
    messagingSenderId: "203816638396",
    appId: "1:203816638396:web:34d02a5999acf321fa7db9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-button").addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("error-message");

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Inicio de sesión exitoso");
            window.location.href = "dashboard.html"; // Redirigir a otra página después del login
        })
        .catch((error) => {
            errorMessage.textContent = "Error: " + error.message;
        });
});