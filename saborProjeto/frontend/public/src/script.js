let index = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide(){
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide(){
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

setInterval(nextSlide, 3000);

const busca = document.getElementById("busca");
const botao = document.getElementById("btnBuscar");
const produtos = document.querySelectorAll(".card");
const carousel = document.getElementById("carousel");

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtrarProdutos() {
  const valorBusca = normalizar(busca.value);

  // esconder ou mostrar carrossel
  if (valorBusca !== "") {
    carousel.style.display = "none";
  } else {
    carousel.style.display = "";
  }

  produtos.forEach(produto => {
    const nome = produto.querySelector("h5").innerText;
    const textoProduto = normalizar(nome);

    if (textoProduto.includes(valorBusca)) {
      produto.style.display = "";
    } else {
      produto.style.display = "none";
    }
  });
}

busca.addEventListener("input", filtrarProdutos);

botao.addEventListener("click", filtrarProdutos);

busca.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    filtrarProdutos();
  }
});

function filtrarProdutos() {
    const valorBusca = normalizar(busca.value);
  
    if (valorBusca !== "") {
      carousel.style.display = "none";
    } else {
      carousel.style.display = "";
    }
  
    produtos.forEach(produto => {
      const nome = produto.querySelector("h5").innerText;
      const textoProduto = normalizar(nome);
  
      if (textoProduto.includes(valorBusca)) {
        produto.style.display = "";
      } else {
        produto.style.display = "none";
      }
    });
  }