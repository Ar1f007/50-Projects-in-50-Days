const API_KEY = '9b41cfdb4d5a5a4698dcb119c9d34d7d';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  renderMovie(data.results);
}

const form = document.querySelector('#form');
const search = document.querySelector('#search');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    console.log(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});

const movieTemplate = document.querySelector('#template');
const movieContainer = document.querySelector('#main');

function renderMovie(movies) {
  movieContainer.innerHTML = '';

  movies.forEach((movie) => {
    const element = movieTemplate.content.cloneNode(true);
    const { title, poster_path, overview, vote_average } = movie;

    setValue('title', title, { parent: element });
    element.querySelector('[data-img]').src = `${IMG_PATH + poster_path}`;
    setValue('overview', overview, { parent: element });
    setValue('rating', vote_average, { parent: element });
    setRatingClass(element, vote_average);

    movieContainer.append(element);
  });
}

function setValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

function setRatingClass(element, rating) {
  if (rating >= 8) {
    element.querySelector('[data-rating]').classList.add('green');
  } else if (rating >= 6 && rating < 8) {
    element.querySelector('[data-rating]').classList.add('orange');
  } else {
    element.querySelector('[data-rating]').classList.add('red');
  }
}
