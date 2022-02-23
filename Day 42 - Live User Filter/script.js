const result = document.querySelector('#result');
const filter = document.querySelector('#filter');

console.log(filter);
const listItems = [];

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const data = await res.json();

  // Clear results
  result.innerHTML = '';

  data.results.forEach((user) => {
    const li = document.createElement('li');

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt='${user.name.first}'>

    <div class="user-info">
      <h4>${user.name.first}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>

    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
getData();

filter.addEventListener('input', (e) => filterData(e.target.value));
