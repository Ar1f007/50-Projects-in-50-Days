const container = document.querySelector('.container');

const slides = [
  {
    heading: 'Explore The World',
    imageURL:
      'https://images.unsplash.com/photo-1501425359013-96058e410cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1178&q=80',
  },
  {
    heading: 'Wild Forest',
    imageURL:
      'https://images.unsplash.com/photo-1513106205242-6d98d6e75d5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    heading: 'Sunny Beach',
    imageURL:
      'https://images.unsplash.com/photo-1537640685236-a9df2496e232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    heading: 'City on Winter',
    imageURL:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    heading: 'Mountain - Clouds',
    imageURL:
      'https://images.unsplash.com/photo-1444580442178-56153ed65706?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
  },
];

slides.forEach((panel, index) => {
  const markup = `
    <div
        class="panel"
        style="
          background-image: url('${panel.imageURL}');
        "
      >
        <h3>${panel.heading}</h3>
    </div>
    `;

  container.insertAdjacentHTML('afterbegin', markup);
});

const panels = document.querySelectorAll('.panel');
panels[0].classList.add('active');

container.addEventListener('click', (e) => {
  removeActiveClasses();
  e.target.closest('.panel').classList.add('active');
});

function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove('active'));
}
