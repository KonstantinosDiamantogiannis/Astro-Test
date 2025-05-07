
// document.querySelector('.hamburger').addEventListener('click', () => {
//    document.querySelector('.nav-links').classList.toggle('expanded'); }); 
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('expanded');
    });
  }
});



// console.log(document.querySelector('.hamburger'));
// console.log(document.querySelector('.nav-links'));
