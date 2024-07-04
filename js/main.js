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
})