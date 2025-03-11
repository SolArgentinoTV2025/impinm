// Inicializa Supabase
const { createClient } = supabase;
const SUPABASE_URL = 'https://ownjmidkbrgkqjkomnni.supabase.co'; // URL de Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93bmptaWRrYnJna3Fqa29tbm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1MTM2MTUsImV4cCI6MjAzOTA4OTYxNX0.8SFiLnh1Z3jJQwtpDIo89jUFy0M2rpoRZyuXTE5o3A4'; // Clave anónima de Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Controlador de registro
document.getElementById('register').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const nickname = document.getElementById('nickname').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Registrar usuario en Supabase
    const { error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        alert('Error al registrar usuario: ' + error.message);
    } else {
        alert('Usuario registrado con éxito. Por favor, verifica tu correo electrónico.');
        window.location.href = 'juego.html';
    }
});

// Controlador de inicio de sesión
document.getElementById('login').addEventListener('click', async () => {
    const email = document.getElementById('login-nickname').value;
    const password = document.getElementById('login-password').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        alert('Credenciales inválidas');
    } else {
        alert('Inicio de sesión exitoso');
        window.location.href = 'juego.html';
    }
});

// Función para cambiar el fondo
const images = [
    'E:/Anotate_en_Pasapalabra/pixlr-image-generator-e65dd46f-7f62-47ba-b30f-a9e5d01d8238.png',
    'E:/Anotate_en_Pasapalabra/pixlr-image-generator-7b50e3dc-61f8-43ad-b4f6-517b6044d4f8.png',
    'E:/Anotate_en_Pasapalabra/pixlr-image-generator-9c92ec6b-4fd1-4c67-af01-3b9de83cbc93.png'
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

// Controlador de la página `juego.html`
async function checkAuth() {
    const { data: session, error } = await supabase.auth.getSession();
    if (error || !session) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('logout').style.display = 'block'; // Mostrar el botón de cerrar sesión
    }
}

// Llama a la función de verificación de autenticación al cargar la página
if (window.location.pathname.endsWith('juego.html')) {
    checkAuth();
}

// Controlador de cierre de sesión
document.getElementById('logout').addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        alert('Error al cerrar sesión: ' + error.message);
    } else {
        alert('Sesión cerrada');
        window.location.href = 'index.html';
    }
});