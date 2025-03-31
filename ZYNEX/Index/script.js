/* Scroll Reveal - Hero Section */

const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navList.classList.toggle("open");
};

const sr = ScrollReveal({
    distance: "60px",
    duration: 2000,
    delay: 450,
    reset: true,
});

sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 450, origin: "top" });
sr.reveal(".icons", { delay: 500, origin: "left" });
sr.reveal(".scroll-down", { delay: 450, origin: "right" });

/* Magic Text - Hero Section */

const typed = new Typed("#change", {
    strings: ["Desarrollo web", "Analisis de Datos", "Desarrollo de Software"],
    typeSpeed: 50,
    backSpeed: 30,  // Velocidad de borrado
    startDelay: 500, // Retraso antes de comenzar
    backDelay: 1000, // Pausa antes de borrar
    loop: true, // Repetir infinitamente
    showCursor: true, // Mostrar cursor intermitente
    cursorChar: ""
});

/* Aumento de numero */

const pyme = document.getElementById("pyme");
const ganancia = document.getElementById("ganancia");
const cliente = document.getElementById("cliente");

function incrementarContador(elemento, maximo) {
    let contador = 0;
    const intervalo = setInterval(() => {
        contador++;
        elemento.textContent = contador + "%"; 

        if (contador >= maximo) {
            clearInterval(intervalo);
        }
    }, 10); 
}

const callback = (entries, observer) => { 
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            incrementarContador(pyme, 85); 
            incrementarContador(ganancia, 90);
            incrementarContador(cliente, 95);
    }
    })
}

const options = {
    root: document,
    rootMargin: "0px",
    threshold: 0.5
}  

const observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('.statBox'));

/* Scroll reveal - About */

sr.reveal(".aboutCard", { delay: 200, origin: "bottom" });
sr.reveal(".text", { delay: 200, origin: "left" });

/* Scroll reveal - Stats */

sr.reveal(".statBox", { delay: 200, origin: "bottom", duration: 2000 });
sr.reveal(".plans", { delay: 200, origin: "top", duration: 2000 });
sr.reveal("#seeMoreWeb", { delay: 200, origin: "left", duration: 2000 });
sr.reveal(".cards", { delay: 200, origin: "right", duration: 2000 });
sr.reveal(".cardImg", { delay: 200, origin: "top", duration: 2000 });

/* Scroll reveal - Certification */

sr.reveal(".gridItem", { delay: 200, origin: "top", duration: 2000 });
