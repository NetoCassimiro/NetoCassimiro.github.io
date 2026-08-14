// Atualiza automaticamente o ano do rodapé
const anoAtual = document.querySelector("#ano-atual");

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}


// Adiciona animações aos elementos das seções
document.documentElement.classList.add("js");

const elementosParaAnimar = document.querySelectorAll(
    "main section > *"
);

const observador = new IntersectionObserver(
    (entradas, observer) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observer.unobserve(entrada.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

elementosParaAnimar.forEach((elemento) => {
    elemento.classList.add("revelar");
    observador.observe(elemento);
});

// Menu para celular
const botaoMenu = document.querySelector(".botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");
const linksDoMenu = document.querySelectorAll("#menu-principal a");

function fecharMenu() {
    botaoMenu.classList.remove("aberto");
    menuPrincipal.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
}

botaoMenu.addEventListener("click", () => {
    const menuEstaAberto = menuPrincipal.classList.toggle("aberto");

    botaoMenu.classList.toggle("aberto", menuEstaAberto);
    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuEstaAberto ? "Fechar menu" : "Abrir menu"
    );
});

linksDoMenu.forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        fecharMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        fecharMenu();
    }
});