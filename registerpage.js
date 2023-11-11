const registerbtn = document.querySelector(".register-btn");
const closebtn = document.querySelector(".btn");
const modalOverlay = document.querySelector(".modalOverlay");

registerbtn.addEventListener("click", function () {
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});
closebtn.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "unset";
});

//validity check
