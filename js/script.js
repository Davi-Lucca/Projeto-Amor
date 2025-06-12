let slideIndex = 0; // Começa na primeira imagem
showSlides(); // Chama a função para iniciar o slideshow

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Esconde todas as imagens
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Incrementa o índice da imagem
  slideIndex++;
  // Se o índice for maior que o número de slides, volta para o primeiro
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Remove a classe 'active' de todos os pontos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostra a imagem atual e adiciona 'active' ao ponto correspondente
  if (slides.length > 0) { // Garante que há slides para mostrar
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }

  // Chama a função novamente após 4 segundos (4000 milissegundos)
  setTimeout(showSlides, 4000); // Mude este valor para ajustar a velocidade
}

// Funções para navegação manual (botões e pontos)
function plusSlides(n) {
  clearTimeout(autoSlideTimeout); // Limpa o timeout automático ao navegar manualmente
  showSlidesManual(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(autoSlideTimeout); // Limpa o timeout automático ao navegar manualmente
  showSlidesManual(slideIndex = n);
}

let autoSlideTimeout; // Variável para armazenar o timeout do slideshow automático

function showSlidesManual(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }
  
  // Reinicia o slideshow automático após uma navegação manual
  autoSlideTimeout = setTimeout(showSlides, 4000); 
}

// Inicia o slideshow automático na primeira carga da página
autoSlideTimeout = setTimeout(showSlides, 4000);



// Adicione este código ao final do seu js/script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('background-music');
    const audioControlButton = document.getElementById('audio-control-button');

    // Tenta tocar a música (mutada) assim que a página carrega
    // Isso é uma boa prática para contornar políticas de autoplay de navegadores
    if (music) {
        music.play().catch(error => {
            console.log("Autoplay de áudio mutado falhou ou não é permitido.", error);
            // Se o autoplay falhar mesmo mutado (raro, mas pode acontecer em certas condições),
            // o usuário ainda poderá ativar pelo botão.
        });
    }

    if (audioControlButton && music) {
        // Define o ícone inicial do botão com base no estado do áudio
        audioControlButton.textContent = music.muted ? '🔇' : '🔊';

        audioControlButton.addEventListener('click', () => {
            if (music.muted) {
                music.muted = false;
                audioControlButton.textContent = '🔊'; // Ícone de som ligado
            } else {
                music.muted = true;
                audioControlButton.textContent = '🔇'; // Ícone de som mutado
            }
        });
    }
});

 