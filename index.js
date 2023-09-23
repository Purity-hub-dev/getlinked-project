const openToggle = document.querySelector(".open-toggle");
const closeToggle = document.querySelector(".close-toggle");
const links = document.querySelector(".nav-links");

openToggle.addEventListener('click', function(){
  console.log(links.classList)
  console.log(links.classList.contains('show-links'))

  if (links.classList.contains('show-links')){
    (links.classList.remove('show-links'))
  }
  else{
    links.classList.add('show-links')
  }
})
closeToggle.addEventListener('click', function(){
  links.classList.remove('show-links')
})
