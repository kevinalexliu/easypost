const windowResize = () => {
  if (window.innerWidth <= 400 && mobile === false) {
    mobile = true;
    desktop = false;
    addDot();
    showMobileVersion();
  }
  if (window.innerWidth > 400 && desktop === false) {
    mobile = false;
    desktop = true;
    removeDot();
    showDesktopVersion();
  }
}

const showMobileVersion = () => {
  const articles = document.getElementsByClassName('articles')[0].children;
  for (let i = 1; i < articles.length; i++) {
    articles[i].classList.add('hidden');
  }
}

const showDesktopVersion = () => {
  const articles = document.getElementsByClassName('articles')[0].children;
  for (let i = 0; i < 2; i++) {
    articles[i].classList.remove('hidden');
  }
}

const addDot = () => {
  const carousel = document.getElementsByClassName('carousel')[0];
  const numOfArticle = document.getElementsByClassName('articles')[0].children.length;
  const curNumOfArticle = carousel.children.length;
  for (let i = curNumOfArticle; i < numOfArticle; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    carousel.appendChild(dot)
  }
}

const removeDot = () => {
  const carousel = document.getElementsByClassName('carousel')[0];
  const numOfArticle = document.getElementsByClassName('articles')[0].children.length;
  const curNumOfArticle = carousel.children.length;
  for (let i = curNumOfArticle; i > 2; i--) {
    const lastChild = carousel.children[carousel.children.length - 1]
    carousel.removeChild(lastChild);
  }
}

let desktop, mobile;
const articles = document.getElementsByClassName('articles')[0].children;
if (window.innerWidth > 400) {
  desktop = true;
  mobile = false;
  removeDot();
  for (let i = 2; i < articles.length; i++) {
    articles[i].classList.add('hidden')
  }
} else {
  desktop = false;
  mobile = true;
  addDot();
  for (let i = 1; i < articles.length; i++) {
    articles[i].classList.add('hidden')
  }
}


window.addEventListener('resize', windowResize)