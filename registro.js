import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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

document.getElementById("register").addEventListener("click", () => {
    const nickname = document.getElementById("nickname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Las contraseñas no coinciden.";
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return updateProfile(userCredential.user, {
                displayName: nickname,
            });
        })
        .then(() => {
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "login.html";
        })
        .catch((error) => {
            errorMessage.textContent = "Error: " + error.message;
        });
});

const images = [
    'https://imperioinmobiliario.com.ar/pixlr-image-generator-e65dd46f-7f62-47ba-b30f-a9e5d01d8238.png',
    'https://imperioinmobiliario.com.ar/pixlr-image-generator-7b50e3dc-61f8-43ad-b4f6-517b6044d4f8.png',
    'https://imperioinmobiliario.com.ar/pixlr-image-generator-9c92ec6b-4fd1-4c67-af01-3b9de83cbc93.png'
];

let currentImageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Cambia la imagen cada 10 segundos
setInterval(changeBackground, 10000);

// Inicializa la primera imagen
changeBackground();