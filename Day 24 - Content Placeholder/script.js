const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profileImg = document.querySelector('.profile-img');
const name = document.querySelector('#name');
const date = document.querySelector('#date');

const animatedBGs = document.querySelectorAll('.animated-bg');
const animatedBGTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 4000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendi';

  profileImg.innerHTML =
    '<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />';

  name.innerHTML = 'Sarah Gilbert';
  date.innerHTML = 'Dec 15, 2021';

  animatedBGs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBGTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
