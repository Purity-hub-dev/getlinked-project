const registerbtn = document.querySelector(".register-btn");
const popUpMessage = document.querySelector(".success-message-container");
const closebtn = document.querySelector(".btn");
// const overlay = document.querySelector(".overlay");

registerbtn.addEventListener("click", function () {
  popUpMessage.style.display = "block";
  // console.log(popUpMessage);
  document.querySelector(".overlay").style.display = "block";
  // overlay.style.display = "block";
  document.body.style.overflow = "hidden";
});
function closewindow() {
  popUpMessage.style.display = "none";
  document.querySelector(".overlay").style.display = "none";
  document.body.style.overflowx = "auto";
}
closebtn.addEventListener("click", closewindow);

