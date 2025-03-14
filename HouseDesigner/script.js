document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const gameInterface = document.getElementById('game-interface');
    const welcomeScreen = document.getElementById('welcome-screen');
    
    let money = 10000; // Dinero inicial
    const properties = []; // Lista de propiedades del jugador
    const marketProperties = [
        { name: 'Casa en el Centro', img: 'path/to/property1-image.webp', price: 5000, rent: 500 },
        { name: 'Apartamento en la Playa', img: 'path/to/property2-image.webp', price: 8000, rent: 800 }
        // Agregar más propiedades según sea necesario
    ];

    document.getElementById('register').addEventListener('click', handleRegister);
    document.getElementById('login').addEventListener('click', handleLogin);
    
// Variable para almacenar el panel activo
let activePanel = null;

function showPanel(panelId) {
    // Ocultar el panel activo si hay uno
    if (activePanel) {
        activePanel.classList.remove('active');
    }
    // Mostrar el nuevo panel
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.classList.add('active');
        activePanel = panel;
    }
}

// Agregar listeners a los botones de navegación
document.getElementById('nav-zones').addEventListener('click', () => showPanel('zones-panel'));
document.getElementById('nav-properties').addEventListener('click', () => showPanel('properties-panel'));
document.getElementById('nav-market').addEventListener('click', () => showPanel('market-panel'));
document.getElementById('nav-bank').addEventListener('click', () => showPanel('bank-panel'));
document.getElementById('nav-profile').addEventListener('click', () => showPanel('profile-panel'));

// Agregar un listener al documento para cerrar el panel cuando se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (activePanel && !activePanel.contains(event.target) && !event.target.matches('.nav-button')) {
        activePanel.classList.remove('active');
        activePanel = null;
    }
});
    
    function handleRegister() {
        const nickname = document.getElementById('nickname').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password === confirmPassword) {
            // Simular el registro exitoso y cambiar a la pantalla de inicio de sesión
            registrationForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            alert('Las contraseñas no coinciden.');
        }
    }

    function handleLogin() {
        // Aquí deberías realizar la autenticación real
        // Simular inicio de sesión exitoso
        welcomeScreen.style.display = 'none';
        gameInterface.style.display = 'flex';
        updateGame();
    }
    
    function showPanel(panelId) {
        document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
        document.getElementById(panelId).classList.add('active');
    }

    function updateGame() {
        document.getElementById('player-money').innerText = `$${money}`;
        document.getElementById('player-properties-count').innerText = properties.length;
        document.getElementById('player-income').innerText = `$${properties.reduce((total, prop) => total + prop.rent, 0)}`;

        const propertiesList = document.getElementById('properties-list');
        propertiesList.innerHTML = '';
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <img src="${property.img}" alt="${property.name}">
                <h3>${property.name}</h3>
                <p>Renta Mensual: $${property.rent}</p>
                <button onclick="sellProperty('${property.name}')">Vender</button>
            `;
            propertiesList.appendChild(propertyCard);
        });

        const marketList = document.getElementById('market-list');
        marketList.innerHTML = '';
        marketProperties.forEach(property => {
            const marketCard = document.createElement('div');
            marketCard.className = 'market-card';
            marketCard.innerHTML = `
                <img src="${property.img}" alt="${property.name}">
                <h3>${property.name}</h3>
                <p>Precio: $${property.price}</p>
                <p>Renta Mensual: $${property.rent}</p>
                <button onclick="buyProperty('${property.name}')">Comprar</button>
            `;
            marketList.appendChild(marketCard);
        });
    }

    window.buyProperty = function(name) {
        const property = marketProperties.find(prop => prop.name === name);
        if (money >= property.price) {
            money -= property.price;
            properties.push(property);
            updateGame();
        } else {
            alert('No tienes suficiente dinero para comprar esta propiedad.');
        }
    };

    window.sellProperty = function(name) {
        const propertyIndex = properties.findIndex(prop => prop.name === name);
        if (propertyIndex > -1) {
            money += properties[propertyIndex].price * 0.75;
            properties.splice(propertyIndex, 1);
            updateGame();
        }
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarItems = document.querySelectorAll('#navbar .nav-item');
    const panels = document.querySelectorAll('.panel');

    // Función para mostrar el panel activo
    function showPanel(id) {
        panels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === id) {
                panel.classList.add('active');
            }
        });
    }

    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.id.replace('nav-', '') + '-panel';
            showPanel(targetId);
        });
    });

    // Manejo del formulario de registro y login
    document.getElementById('register').addEventListener('click', function() {
        // Aquí agregar la lógica para registrar al usuario
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('game-interface').style.display = 'flex';
    });

    document.getElementById('login').addEventListener('click', function() {
        // Aquí agregar la lógica para iniciar sesión
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('game-interface').style.display = 'flex';
    });
});
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
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del formulario de registro y inicio de sesión
    const registerButton = document.getElementById('register');
    const loginButton = document.getElementById('login');

    // Manejar el clic en el botón de registro
    registerButton.addEventListener('click', () => {
        const nickname = document.getElementById('nickname').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validar el formulario
        if (nickname && password && confirmPassword && password === confirmPassword) {
            // Aquí podrías agregar la lógica para registrar al usuario, como hacer una solicitud a un servidor

            // Redirigir al juego
            window.location.href = 'game.html';
        } else {
            alert('Por favor, completa todos los campos y asegúrate de que las contraseñas coincidan.');
        }
    });

    // Manejar el clic en el botón de inicio de sesión
    loginButton.addEventListener('click', () => {
        const loginNickname = document.getElementById('login-nickname').value;
        const loginPassword = document.getElementById('login-password').value;

        // Validar el formulario
        if (loginNickname && loginPassword) {
            // Aquí podrías agregar la lógica para autenticar al usuario, como hacer una solicitud a un servidor

            // Redirigir al juego
            window.location.href = 'juego.html';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

const SUPABASE_URL = 'https://ownjmidkbrgkqjkomnni.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93bmptaWRrYnJna3Fqa29tbm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1MTM2MTUsImV4cCI6MjAzOTA4OTYxNX0.8SFiLnh1Z3jJQwtpDIo89jUFy0M2rpoRZyuXTE5o3A4';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas').appendChild(renderer.domElement);

// Agrega una luz
const light = new THREE.AmbientLight(0xffffff); 
scene.add(light);

// Configura la cámara
camera.position.z = 5;

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Maneja los eventos de los botones
document.querySelectorAll('.tool').forEach(tool => {
    tool.addEventListener('click', () => {
        const type = tool.dataset.type;
        // Lógica para agregar objetos
        addObject(type);
    });
});

function addObject(type) {
    let geometry;
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    
    switch(type) {
        case 'wall':
            geometry = new THREE.BoxGeometry(1, 3, 0.1);
            break;
        case 'door':
            geometry = new THREE.BoxGeometry(0.8, 2, 0.1);
            break;
        case 'window':
            geometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);
            break;
        case 'furniture':
            geometry = new THREE.BoxGeometry(1, 1, 1);
            break;
        default:
            return;
    }
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

document.getElementById('save').addEventListener('click', async () => {
    // Implementa la lógica para guardar el diseño en Supabase
    const design = { /* datos del diseño */ };
    const { data, error } = await supabase
        .from('designs')
        .insert([design]);
    if (error) console.error('Error saving design:', error);
    else console.log('Design saved:', data);
});

document.getElementById('publish').addEventListener('click', () => {
    // Implementa la lógica para publicar el diseño
    console.log('Design published');
});