const openToggle = document.querySelector(".open-toggle");
const closeToggle = document.querySelector(".close-toggle");
const links = document.querySelector(".nav-links");


//toggle navigation

openToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// main container [frequently asked questions]

//show content
function showHiddenContent(event) {
  const targetButtonId = event.target.getAttribute("data-target");
  const hiddenContent = document.querySelector(
    `.toggle-content[data-content-id="${targetButtonId}"]`
  );
  if (hiddenContent){
    hiddenContent.style.display = "block";
  }
}
//hide content
function hideHiddenContent(event) {
  const targetButtonId = event.target.getAttribute("data-target");
  const hiddenContent = document.querySelector(
    `.toggle-content[data-content-id="${targetButtonId}"]`
  );
  if (hiddenContent){
    hiddenContent.style.display = "none";
  }
}
  const toggleShowIcons = document.querySelectorAll(".show-icon");
  toggleShowIcons.forEach(button => {
    button.addEventListener("click", showHiddenContent);
  })
  
  const toggleHideIcon = document.querySelectorAll(".hidden-icon");
  toggleHideIcon.forEach(button => {
    button.addEventListener("click", hideHiddenContent);
  });