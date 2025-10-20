document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const currentlyActive = document.querySelector('.accordion-item.active');
      if (currentlyActive && currentlyActive !== item) {
        currentlyActive.classList.remove('active');
      }
      item.classList.toggle('active');
    });
  });
});
console.log(item);
document.getElementById('submission-button').addEventListener('click',(
  e=>{
    e.preventDefault();
    console.log('clicked');
  }
))