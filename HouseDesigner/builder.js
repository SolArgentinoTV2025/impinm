
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

// script.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cargar y agregar un modelo de casa
const loader = new THREE.GLTFLoader();
loader.load('assets/models/house_model.glb', function(gltf) {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, 0, 0); // Ajustar la posición del modelo
}, undefined, function(error) {
    console.error(error);
});

// Cargar texturas
const textureLoader = new THREE.TextureLoader();
const wallTexture = textureLoader.load('assets/textures/wall_texture.jpg');
const floorTexture = textureLoader.load('assets/textures/floor_texture.jpg');

// Crear materiales
const wallMaterial = new THREE.MeshBasicMaterial({ map: wallTexture });
const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });

// Crear geometrías y aplicar materiales
const wallGeometry = new THREE.BoxGeometry(10, 10, 1);
const floorGeometry = new THREE.PlaneGeometry(10, 10);

const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

floorMesh.rotation.x = -Math.PI / 2; // Rotar el suelo para que quede horizontal
scene.add(wallMesh);
scene.add(floorMesh);

// Configuración de la cámara
camera.position.z = 15;

// Crear una luz
const light = new THREE.AmbientLight(0x404040); // Luz ambiental
scene.add(light);

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Manejar el redimensionamiento de la ventana
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});