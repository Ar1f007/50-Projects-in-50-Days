const counters = document.querySelectorAll('.counter');

const dataTarget = [];

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = Number(counter.dataset.target);
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
