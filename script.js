document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll reveal effect
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -80px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Adiciona a classe 'visible'
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Typewriter effect
function typeWriter(element, text, speed = 100, callback = null) {
  let i = 0;
  element.innerHTML = ""; // Limpa o conteúdo do elemento
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback(); // Chama o callback quando o texto terminar
    }
  }
  type();
}

// Start typewriter on page load
window.addEventListener("load", () => {
  const typewriterElement = document.getElementById("typewriter");
  const subtitleElement = document.querySelector(".info-pessoal h3");
  typewriterElement.style.fontSize = "50px";
  // Aplica o efeito de typewriter no h1 e depois no h3
  typeWriter(typewriterElement, "Gustavo Henrique", 80, () => {
    typeWriter(
      subtitleElement,
      "Desenvolvedor Front-End | Ciência da Computação",
      30,
    );
  });
});
