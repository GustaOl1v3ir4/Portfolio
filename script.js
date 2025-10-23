document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio carregado")
})

const text = "🚀 Novos projetos chegando em breve...";
const target = document.querySelector(".breve-texto");
target.textContent = text;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            target.classList.add("active");
            observer.unobserve(target);
        }
    });
}, { threshold: 0.6 });

observer.observe(target);


