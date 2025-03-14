<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imperio Inmobiliario - Bienvenida</title>
    <link rel="icon" type="image/x-icon" href="E:\Imperio Inmobiliario\favicon.ico">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;700&display=swap">
</head>
<body>
    <!-- Pantalla de Bienvenida -->
    <div id="welcome-screen">
        <div class="welcome-container">
            <h1>Imperio Inmobiliario</h1>
            <p>Construye, mejora y gestiona tu imperio inmobiliario.</p>
            <!-- Formulario de Registro -->
            <div id="registration-form" class="form-container">
                <h2>Registro</h2>
                <input type="text" id="name" placeholder="Ingresa tu nombre" required>
                <input type="text" id="nickname" placeholder="Ingresa tu nickname" required>
                <input type="email" id="email" placeholder="Ingresa tu correo electrónico" required>
                <input type="password" id="password" placeholder="Crea una contraseña" required>
                <input type="password" id="confirm-password" placeholder="Confirma tu contraseña" required>
                <button id="register">Registrarse</button>
            </div>
            <!-- Formulario de Inicio de Sesión -->
            <div id="login-form" class="form-container">
                <h2>Inicio de Sesión</h2>
                <input type="text" id="login-nickname" placeholder="Nickname" required>
                <input type="password" id="login-password" placeholder="Contraseña" required>
                <button id="login">Iniciar Sesión</button>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.4/dist/supabase.js"></script>
    <script src="registro.js"></script>
</body>
</html>