const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if(window.scrollY >= 100) {
    header.classList.add('header_black');
  } else {
    header.classList.remove('header_black');
  }
})

const scrollContainer = document.querySelector('.content_lists');

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
})