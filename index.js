<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduCloud - Plataforma de Aprendizaje Cloud & Tech</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header class="navbar">
        <div class="logo">Edu<span>Cloud</span></div>
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="Buscar cursos (ej. AWS, Docker, Linux)...">
        </div>
        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">☰</button>
        <nav class="nav-links" id="navLinks">
            <a href="#cursos">Cursos</a>
            <a href="#rutas">Certificaciones</a>
            <button id="cartBtn" class="cart-btn">Mi Panel (<span id="cartCount">0</span>)</button>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Acelera tu Carrera en Arquitectura Cloud</h1>
            <p>Plataforma e-Learning de alto rendimiento alineada a certificaciones de AWS, GCP y Azure.</p>
            <a href="#cursos" class="btn-primary">Explorar Catálogo</a>
        </div>
    </section>

    <main class="container">
        <section id="cursos" class="courses-section">
            <h2>Catálogo Oficial de Cursos</h2>
            <div class="filters">
                <button class="filter-btn active" data-category="all">Todos</button>
                <button class="filter-btn" data-category="AWS">AWS</button>
                <button class="filter-btn" data-category="Azure">Azure</button>
                <button class="filter-btn" data-category="GCP">GCP</button>
            </div>
            <div class="courses-grid" id="coursesGrid">
                <!-- Tarjetas dinámicas generadas mediante JS -->
            </div>
        </section>
    </main>

    <aside class="sidebar-cart" id="sidebarCart">
        <div class="cart-header">
            <h3>Cursos Seleccionados</h3>
            <button id="closeCart">×</button>
        </div>
        <div class="cart-items" id="cartItems">
            <!-- Items dinámicos del carrito -->
        </div>
        <div class="cart-footer">
            <p>Total Horas: <span id="totalHours">0</span> hrs</p>
            <button class="btn-checkout" onclick="alert('Inscripción procesada correctamente en el servidor Cloud.')">Confirmar Inscripción</button>
        </div>
    </aside>

    <footer class="footer">
        <p>© 2026 EduCloud Inc. Infraestructura IaaS Desplegada en Servidor Linux Nginx. Todos los derechos reservados.</p>
    </footer>

    <script src="js/app.js"></script>
</body>
</html>


