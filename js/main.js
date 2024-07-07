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
        <a href="https://drive.google.com/file/d/1paRz-iEklIYQLQGPpi6sz2gHGdbMv_8j/view?usp=sharing" target="_blank" class="socialmedia__link" title="Curriculum Vitae">Descargar CV</a>
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


// selecciono el contenido de la seccion de certificados

let certifications = document.getElementById('certifications');

// creo el contenido para esa la seccion de proyectos

let certificationsContent = `
    <h2 class="certifications__title">Certificados</h2>
        <div class="certifications__grid">
            <img class="certificado__desarrollo" src="./images/desarrolloWeb (2).png" alt="Certificado de Desarrollo Web">
            <img class="certificado__js" src="./images/javaScript.PNG" alt="Certificado de JavaScript">
            <img class="certificado__react" src="./images/ReactJS.jpg" alt="Certificado de ReactJS">
            <img class="certificado__freeCode" src="./images/cert.CSS-freeCodeCamp.jpg" alt="Certificado de Responsive Design de freeCodeCamp">
        </div>

`

    certifications.innerHTML = certificationsContent;

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
    `

    skills.innerHTML = skillsContent;

// selecciono el contenido de la seccion de certificados

let certifications = document.getElementById('certifications');

// creo el contenido para esa la seccion de certificados

let certificationsContent = `
    <h2 class="certifications__title">Certificados</h2>
        <div class="certifications__grid">
            <img class="certificado__desarrollo" src="./images/desarrolloWeb (2).png" alt="Certificado de Desarrollo Web">
            <img class="certificado__js" src="./images/javaScript.PNG" alt="Certificado de JavaScript">
            <img class="certificado__react" src="./images/ReactJS.jpg" alt="Certificado de ReactJS">
            <img class="certificado__freeCode" src="./images/cert.CSS-freeCodeCamp.jpg" alt="Certificado de Responsive Design de freeCodeCamp">
        </div>

`

    certifications.innerHTML = certificationsContent;

// selecciono el contenido de la seccion de contacto

let contact = document.getElementById('contact');

// creo el contenido para esa la seccion de contacto

let contactContent = `
    <h2 class="contact__title">Contacto</h2>
    
    <div id="form-container" class="form">
        <img class="form-logoVero" src="./images/logoVero.jpg" alt="Logo Vero Strizinec">
        <form action="" class="form" method="post"> <!--el action dice donde se va a enviar el formulario. El metodo GET para envio lo manda por la URL, el metodo POST lo envia de forma oculta-->
            <label for="nombre">Nombre </label>
            <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" autocomplete="on" required>
            <label for="apellido">Apellido </label>
            <input type="text" name="apellido" id="apellido" placeholder="Tu apellido" autocomplete="on"  required>
            <label for="email">Email  </label>
            <input type="email" name="correo" placeholder="Tu email" autocomplete="on" required>
            <label for="comentario">Comentario </label>
            <textarea name="comentario" placeholder="Dejame tu comentario" cols="25" rows="5" required></textarea>
        
        <button class="enviar" onclick="">Enviar</button>
        </form>
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

    footer.innerHTML = footerContentContent;
})
