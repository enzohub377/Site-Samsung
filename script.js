const featuredImage = document.getElementById('featured-image');

const imgOriginal = 'assets/galaxy-watch-new.svg';
const imgPrata = 'assets/galaxy-watch-silver.svg';
const imgGrafite = 'assets/galaxy-watch-graphite.svg';

let imageFixa = null;
let corEscolhidaAtivo = null;

function trocarTransition(element, src) {
  element.style.opacity = 0;
  element.style.transform = 'scale(0.95)';

  setTimeout(() => {
    element.src = src;
    element.style.opacity = 1;
    element.style.transform = 'scale(1)';
  }, 250);
}

function ativarCorEscolhida(elemento, corFundo) {
  if (corEscolhidaAtivo) {
    corEscolhidaAtivo.classList.remove('active');
  }

  elemento.classList.add('active');
  corEscolhidaAtivo = elemento;

  fundoCor.style.backgroundColor = corFundo;
}

const labelCor = document.createElement('span');
labelCor.classList.add('color-label');

labelCor.style.position = 'absolute';
labelCor.style.fontSize = '22.5px';
labelCor.style.fontWeight = '600';
labelCor.style.top = '-45px';
labelCor.style.left = '50%';
labelCor.style.transform = 'translateX(-50%)';
labelCor.style.pointerEvents = 'none';
labelCor.style.display = 'none';

function mostrarLabel(circulo, texto) {
  labelCor.textContent = texto;
  circulo.appendChild(labelCor);
  labelCor.style.display = 'block';
}

function esconderLabel() {
  labelCor.style.display = 'none';
}

const silverOption = document.getElementById('EscolhaPrata');
const graphiteOption = document.getElementById('EscolhaGrafite');

silverOption.addEventListener('mouseover', () => {
  if (!imageFixa) trocarTransition(featuredImage, imgPrata);
});

graphiteOption.addEventListener('mouseover', () => {
  if (!imageFixa) trocarTransition(featuredImage, imgGrafite);
});

silverOption.addEventListener('mouseout', () => {
  if (!imageFixa) trocarTransition(featuredImage, imgOriginal);
});

graphiteOption.addEventListener('mouseout', () => {
  if (!imageFixa) trocarTransition(featuredImage, imgOriginal);
});

silverOption.addEventListener('click', (e) => {
  e.stopPropagation();

  imageFixa = imgPrata;

  trocarTransition(featuredImage, imageFixa);

  ativarCorEscolhida(silverOption, corPrata);

  mostrarLabel(silverOption, 'Prata');
  silverOption.style.color = 'white';
});

graphiteOption.addEventListener('click', (e) => {
  e.stopPropagation();

  imageFixa = imgGrafite;

  trocarTransition(featuredImage, imageFixa);

  ativarCorEscolhida(graphiteOption, corGrafite);

  mostrarLabel(graphiteOption, 'Grafite');
  graphiteOption.style.color = 'white';
});

document.addEventListener('click', () => {
  imageFixa = null;

  trocarTransition(featuredImage, imgOriginal);

  if (corEscolhidaAtivo) {
    corEscolhidaAtivo.classList.remove('active');
    corEscolhidaAtivo = null;
  }

  esconderLabel();

  fundoCor.style.backgroundColor = fundoOriginal;
});

const fundoCor = document.getElementById('colorPicker');

const fundoPrata = silverOption;
const fundoGrafite = graphiteOption;

const fundoOriginal = 'transparent';
const corPrata = '#c9cccc';
const corGrafite = '#5b6166';

if (fundoCor && fundoPrata && fundoGrafite) {
  fundoPrata.addEventListener('mouseover', () => {
    fundoCor.style.backgroundColor = corPrata;
    fundoCor.style.transition = 'background-color .5s ease';
  });

  fundoPrata.addEventListener('mouseout', () => {
    if (!corEscolhidaAtivo) {
      fundoCor.style.background = fundoOriginal;
      fundoCor.style.transition = 'background-color .5s ease';
    }
  });

  fundoGrafite.addEventListener('mouseover', () => {
    fundoCor.style.backgroundColor = corGrafite;
    fundoCor.style.transition = 'background-color .5s ease';
  });

  fundoGrafite.addEventListener('mouseout', () => {
    if (!corEscolhidaAtivo) {
      fundoCor.style.background = fundoOriginal;
      fundoCor.style.transition = 'background-color .5s ease';
    }
  });
}

const menuBurger = document.querySelector('.menu-burger');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('#nav-menu');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  nav.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuBurger.classList.remove('active');
    nav.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
