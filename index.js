const openToggle = document.querySelector(".open-toggle");
const closeToggle = document.querySelector(".close-toggle");
const links = document.querySelector(".nav-links");

//toggle navigation

openToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
closeToggle.addEventListener("click", function () {
  links.classList.remove("show-links");
});

// main container [frequently asked questions]

//show content
// function showHiddenContent(event) {
//   const targetButtonId = event.target.getAttribute("data-target");
//   const hiddenContent = document.querySelector(
//     `.toggle-content[data-content-id="${targetButtonId}"]`
//   );
//   if (hiddenContent){
//     hiddenContent.style.display = "block";
//   }
// }
// //hide content
// function hideHiddenContent(event) {
//   const targetButtonId = event.target.getAttribute("data-target");
//   const hiddenContent = document.querySelector(
//     `.toggle-content[data-content-id="${targetButtonId}"]`
//   );
//   if (hiddenContent){
//     hiddenContent.style.display = "none";
//   }
// }
//   const toggleShowIcons = document.querySelectorAll(".show-icon");
//   toggleShowIcons.forEach(button => {
//     button.addEventListener("click", showHiddenContent);
//   })

//   const toggleHideIcon = document.querySelectorAll(".hidden-icon");
//   toggleHideIcon.forEach(button => {
//     button.addEventListener("click", hideHiddenContent);
//   });

// other way to do it
// const buttons = document.querySelectorAll(".toggle-container");
// buttons.forEach(function (button) {
//   button.addEventListener("click", function (event) {
//     // console.log(event.currentTarget.parentElement.parentElement)
//     const question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-content")
//   });
// });

//by selector
const questions = document.querySelectorAll(".main-article")
questions.forEach(function(question){
  button = question.querySelector(".toggle-container")
  button.addEventListener("click", function(){
    questions.forEach(function(icon){
      if(icon !== question){
        icon.classList.remove('show-content')
      }
    })
    question.classList.toggle("show-content")
  })
});