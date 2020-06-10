var button=document.querySelector(".page-header__toggle");
button.style.visibility="visible";
var men=document.querySelector(".page-header");
men.classList.toggle("page-header--menu-closed");
button.addEventListener("click", function(){
  men.classList.toggle("page-header--menu-closed");
});
var modal = document.querySelector(".pop-up__error");
var link = document.querySelector(".competition__button button");
link.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display="block";
});
var modal_close_button = document.querySelector(".pop-up__error button");
modal_close_button.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display="none";
});
window.addEventListener("keydown", function (event) {
if (event.keyCode === 27) {
  if (modal.style.display="block") {
    modal.style.display="none";
    }
  }
});