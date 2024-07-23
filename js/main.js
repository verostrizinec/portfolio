// DOMCONTENTLOADED ayuda a que se cargue el JS

document.addEventListener('DOMContentLoaded', function() {

    // selecciono el contendedor principar de la sección home

    let homeContainer = document.querySelector('.home__container');

    // creo el contenido que quiero agregar a esa seccion

    let homeContent = `
    <div class="titulo">
        <h1 class="home__title">
            Hola <i class="hi">👋</i> Soy<br>
            <span class="home__title--decorated">Veronica Strizinec</span><br>
            Desarrolladora Frontend
        </h1>
    <div class="social__media">
        <a href="https://www.linkedin.com/in/veronica-stri/" target="_blank" class="socialmedia__link" title="Linkedin">
            <img class="linkedin__icon" src="https://img.icons8.com/ios/50/null/linkedin-2--v1.png" alt="Icono Linkedin" width="30px">
        </a>
        <a href="https://github.com/verostrizinec" target="_blank" class="socialmedia__link" title="GitHub">
            <img src="https://img.icons8.com/ios/50/null/github--v1.png" alt="Icono GitHub" class="github__icon" width="30px">
        </a>
        <a href="https://drive.google.com/file/d/1S83l95uY4PbvJGuLvHwQF5bUrrRhoRIg/view?usp=sharing" target="_blank" class="socialmedia__link" title="Curriculum Vitae">Descargar CV</a>
    </div>
    </div>
    <div id="fotoVero">
        <img src="./images/PHOTO-2021-08-25-10-48-43.png" class="fotoVero" alt="Foto Vero Strizinec">
    </div>
    `;

    // agrego el contenido al contenedor de la seccion home

    homeContainer.innerHTML = homeContent;

    // selecciono el contenido principal de la seccion aboutMe

    let aboutMeContent = document.querySelector('.aboutMe__content');

    // creo el contenido para la seccion aboutMe

    let aboutMeText = `
        <p class="myHistory">
            Mi nombre es <strong>Veronica Strizinec</strong>, tengo 36 años y vivo en Berazategui, Buenos Aires, Argentina. Soy Licenciada en Administración de Empresas y desde muy chiquita me gusta mucho y tengo mucha facilidad con la tecnología. En el año 2022 empecé a estudiar programación y descubrí un mundo fascinante.
        </p>
        <p class="myHistory">
            Inicié en este mundo de la tecnologia con cursos de CoderHouse donde aprendí <strong>HTML, CSS, Git, GitHub, JavaScript, etc.</strong> Me fascina conocer la forma en la que se puede dar vida a un sitio web y la forma en la que el usuario puede interactuar con el sitio.
        </p>
        <p class="myHistory">
            Si bien el camino por momentos puede ser frustrante, hago honor a una frase que siempre me decia mi papá: <span class="papi">"Perservera y triunfarás."</span> 😇💗
        </p>
    `;

    aboutMeContent.innerHTML = aboutMeText;

    // selecciono el contenido de la seccion de proyectos

    let proyectos = document.getElementById('proyects');

// creo el contenido para esa la seccion de proyectos

    let proyectContext = `
    <h2 class="proyects__title">Proyectos</h2>
    <div class="proyects__grid">
    <a href="https://susulenta.netlify.app/" class="susulenta"  target="_blank">
        <img src="./images/Logotipo_Tienda_de_Plantas_Minimalista_Verde_y_Blanco__1_-removebg-preview.png" alt="Logo Susulenta" width="200px" height="200px">Sitio Web de Suculentas</a>
    <a href="https://tritato.netlify.app/" class="tritato"  target="_blank">
        <img src="./images/logo-removebg-preview.png" alt="Logo Tritato" width="300px" height="200px">Sitio Web de Tritato</a>
    <a href="https://calculadora-verostri.netlify.app/" class="calculadora"  target="_blank">
        <img src="./images/calculadora.png" alt="Logo Calculadora" width="200px" height="200px">Calculadora</a>
    <a href="https://verostrizinec.github.io/adivinanza/" class="adivinanza"  target="_blank">
        <img src="./images/108_Signos_De_Exclamacion_E_Interrogacion_En_Espanol_-1200x960-removebg-preview.png" alt="Logo Adivinanza" width="200px" height="200px">Juego de Adivinanza</a>
        </div>
    `

    proyectos.innerHTML = proyectContext;

// selecciono el contenido de la seccion de tecnologias

let skills = document.getElementById('skills');

// creo el contenido para esa la seccion de tecnologias

let skillsContent = `
    <div class="skills__tech">
        <h2 class="skills__title">Tecnologías y Herramientas</h2>
    <section class="skills__grid">
    <div class="skill">
        <img src="https://img.icons8.com/color/144/null/html-5--v1.png" alt="Icono HTML">
        <strong class="skill_title">HTML</strong>
    </div>
    <div class="skill">
        <img src="https://img.icons8.com/color/144/null/css3.png" alt="Icono CSS">
        <strong class="skill_title">CSS</strong>
    </div>
    <div class="skill">
        <img src="https://img.icons8.com/color/144/javascript--v1.png" alt="Icono JavaScript">
        <strong class="skill_title">JavaScript</strong>
    </div>
    <div class="skill">
        <img src="https://img.icons8.com/color/144/null/git.png" alt="Icono GIT">
        <strong class="skill_title">Git</strong>
    </div>
    <div class="skill">
        <img src="https://img.icons8.com/ios-filled/100/null/github.png"  alt="Icono GitHub">
        <strong class="skill_title">GitHub</strong>
    </div>
    <div class="skill">
        <img src="https://img.icons8.com/color/144/null/sass.png"  alt="Icono Sass">
        <strong class="skill_title">Sass</strong>
    </div>
    <div class="skill">
        <img src="https://img.icons8.com/color/144/nodejs.png"  alt="Icono Node JS">
        <strong class="skill_title">Node JS</strong>
    </div>
    `

    skills.innerHTML = skillsContent;

// selecciono el contenido de la seccion de contacto

let contact = document.getElementById('contact');

// creo el contenido para esa la seccion de contacto

let contactContent = `
    <h2 class="contact__title">Contacto</h2>

       <p class="texto-contacto">Si llegaste hasta aca, ¡Espero que te haya gustado mi <strong>Porfolio</strong>!<br>
       <br>
       Si queres entrar en contacto conmigo te dejo mi <strong>Linkedin</strong> o <strong>Correo Electronico</strong>.</p>

       <div class="contacto-redes">
       <a href="https://www.linkedin.com/in/veronica-stri/" target="_blank" class="socialmedia__link" title="Linkedin">
        <img width="80" height="80" src="https://img.icons8.com/color/144/linkedin.png" alt="linkedin" class="swing"/>
       </a>
        <a href="mailto:verostrizinec@gmail.com" class="socialmedia__link" title="Correo Electronico">
            <img width="80" height="80" src="https://img.icons8.com/fluency/48/gmail-new.png" alt="Correo Electronico" class="swing"/>
        </a>

       </div>


    `

    contact.innerHTML = contactContent;

// selecciono el contenido de la seccion de footer

let footer = document.querySelector('.footer');

// creo el contenido para esa la seccion de footer

let footerContent = `
    <div class="footer-container">
        <p class="frase__papi">"Persevera y triunfarás." 😇</p>
        <p class="text__footer part1">Hecho con</p> <section class="text__footer heart">💗</section> <p class="text__footer part2">Veronica Strizinec ©</p>
    <div class="redes__sociales">
        <a href="https://www.linkedin.com/in/veronica-stri/" target="_blank" class="socialmedia__link" title="Linkedin">
        <img class="linkedin__icon" src="https://img.icons8.com/ios/50/null/linkedin-2--v1.png" alt="Icono Linkedin" width="30px">
    </a>
    <a href="https://github.com/verostrizinec" target="_blank" class="socialmedia__link" title="GitHub">
        <img src="https://img.icons8.com/ios/50/null/github--v1.png" alt="Icono GitHub" class="github__icon" width="30px">
     </a>
    </div>
    </div>
    `

    footer.innerHTML = footerContent;

// CAMBIAR COLOR DE FONDO

    // Selecciono el boton de cambio de modo

const darkModeToggle = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme'); // Usamos localStorage.getItem para obtener el tema actualmente guardado en el almacenamiento local del navegador. localStorage es un objeto que permite almacenar datos de forma persistente en el navegador del usuario.

    // si hay un tema guardado en localStorage, aplicarlo

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // Añadir el evento de clic para cambiar el tema

    darkModeToggle.addEventListener('click', function () {
        // Alternar la clase dark-mode en el cuerpo del documento
        document.body.classList.toggle('dark-mode');

        // Inicializar el tema como light-mode por defecto

        let theme = 'light-mode';
        if (document.body.classList.contains('dark-mode')) {
            // Si el modo oscuro está activado, cambiar el tema a dark-mode
            theme = 'dark-mode';
            // Cambiar el ícono a un sol
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            // Cambiar el ícono a una luna
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        // Guardar el tema en localStorage

        localStorage.setItem('theme', theme);
        
    })
})
