const coffesContainer = document.querySelector('.coffes-container');
const url =
  'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

async function coffes() {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(
    ({ id, name, image, price, rating, votes, popular, available }) => {
      const coffeImg = document.createElement('img');
      coffeImg.src = image;

      const star = document.createElement('img');
      star.src = 'img/Star_fill.svg';

      const coffeItem = document.createElement('div');
      coffeItem.classList.add('coffes-item');
      coffeItem.appendChild(coffeImg);

      const divPrice = document.createElement('div');
      divPrice.classList.add('price');
      const h2 = document.createElement('h2');
      const span = document.createElement('span');

      h2.textContent = name;
      span.textContent = price;

      divPrice.appendChild(h2);
      divPrice.appendChild(span);

      const divRate = document.createElement('div');
      divRate.classList.add('rate');
      const img = document.createElement('img');
      img.src = './img/Star_fill.svg'
      divRate.appendChild(img);

      const pRate = document.createElement('p');
      pRate.textContent = rating;
      divRate.appendChild(pRate);

      const voteSpan = document.createElement('span');
      voteSpan.textContent = `(${votes} votes)`;
      if (rating === null) {
        img.src = './img/Star.svg';
        voteSpan.textContent  = 'No ratings'
      }
      divRate.appendChild(voteSpan);

      coffeItem.appendChild(divPrice);
      coffeItem.appendChild(divRate);

      coffesContainer.appendChild(coffeItem);
    }
  );
}
coffes();
