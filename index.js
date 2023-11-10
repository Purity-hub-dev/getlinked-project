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
const questions = document.querySelectorAll(".main-article");
questions.forEach(function (question) {
  button = question.querySelector(".toggle-container");
  button.addEventListener("click", function () {
    questions.forEach(function (icon) {
      if (icon !== question) {
        icon.classList.remove("show-content");
      }
    });
    question.classList.toggle("show-content");
  });
});

//counter

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadlineContainer = document.querySelector(".header-counter");
const dealineFormat = document.querySelectorAll(".header-counter h4");

const futureDate = new Date(2024, 0, 8, 10, 30, 0);

const futureYear = futureDate.getFullYear();
const futureMonth = futureDate.getMonth();
const futureDay = futureDate.getDay();
const futureMinutes = futureDate.getMinutes();
const futureSeconds = futureDate.getSeconds();
// console.log(futureYear);

// how many minutes make a day

//1s = 1000ms
//1m = 60s
//1hr = 60m
//1d = 24hr
const futureTime = futureDate.getTime();
// console.log(futureTime);
function getFutureTime() {
  const currentTime = new Date().getTime();
  const getRemainingTime = futureTime - currentTime;
  // console.log(getRemainingTime);

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(getRemainingTime / oneDay);
  const hours = Math.floor((getRemainingTime % oneDay) / oneHour);
  const minutes = Math.floor((getRemainingTime % oneHour) / oneMinute);
  const seconds = Math.floor((getRemainingTime % oneMinute) / 1000);
  // console.log(seconds);

  const values = [days, hours, minutes, seconds];
  function addZero(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  dealineFormat.forEach(function (item, index) {
    item.innerHTML = addZero(values[index]);
  });
  if (getRemainingTime < 0) {
    deadlineContainer.innerHTML = `<h4>Sorry, Registration Is Closed</h4>`;
  }
}
setInterval(getFutureTime, 1000);
getFutureTime();
