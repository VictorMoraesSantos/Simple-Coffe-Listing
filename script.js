const btnAll = document.querySelector('#all');
const btnAvailable = document.querySelector('#available');
const coffesContainer = document.querySelector('.coffes-container');
const url =
  'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

async function coffes() {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(({ name, image, price, rating, votes, popular, available }) =>
    createElements(name, image, price, rating, votes, popular, available)
  );
}

function createElements(name, image, price, rating, votes, popular, available) {
  const coffeImg = document.createElement('img');
  coffeImg.src = image;

  const star = document.createElement('img');
  star.src = 'img/Star_fill.svg';

  const coffeItem = document.createElement('div');
  coffeItem.classList.add('coffes-item');
  coffeItem.appendChild(coffeImg);

  if (popular === true) {
    const tagPopular = document.createElement('span');
    tagPopular.classList.add('popular');
    tagPopular.textContent = 'Popular';
    coffeItem.appendChild(tagPopular);
  }

  const divPrice = document.createElement('div');
  divPrice.classList.add('price');
  const h2 = document.createElement('h2');
  h2.textContent = name;
  divPrice.appendChild(h2);
  const span = document.createElement('span');
  span.textContent = price;
  divPrice.appendChild(span);

  const divRate = document.createElement('div');
  divRate.classList.add('rate');
  const img = document.createElement('img');
  img.src = './img/Star_fill.svg';
  divRate.appendChild(img);

  const pRate = document.createElement('p');
  pRate.classList.add('numRate');
  pRate.textContent = rating;
  divRate.appendChild(pRate);

  const voteSpan = document.createElement('span');
  voteSpan.textContent = `(${votes} votes)`;
  if (rating === null) {
    img.src = './img/Star.svg';
    voteSpan.textContent = 'No ratings';
  }
  divRate.appendChild(voteSpan);

  if (available === false) {
    const soldOut = document.createElement('span');
    soldOut.classList.add('soldOut');
    soldOut.textContent = 'Sold out';
    divRate.appendChild(soldOut);
  }

  coffesContainer.appendChild(coffeItem);
  coffeItem.appendChild(divPrice);
  coffeItem.appendChild(divRate);

  function showAll() {
    coffeItem.classList.remove('hidden');
  }

  function showAvailable() {
    if (available === false) {
      coffeItem.classList.add('hidden');
    }
  }

  btnAll.addEventListener('click', () => showAll());
  btnAvailable.addEventListener('click', () => showAvailable());
}
coffes();
