const registerbtn = document.querySelector(".register-btn");
const popUpMessage = document.querySelector(".pop-up-message");
const closebtn = document.querySelector(".btn");

registerbtn.addEventListener("click", function () {
  popUpMessage.style.display = "block";
  console.log(popUpMessage);
  overlay.style.display = "block"
  document.body.style.overflow = "hidden";
  
});
function closewindow() {
  popUpMessage.style.display = "none";
  document.body.style.overflowx = "auto";
}
closebtn.addEventListener("click", closewindow);
// console.log(closebtn);
