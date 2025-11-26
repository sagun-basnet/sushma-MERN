const sidebar = document.querySelector(".sidebar");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "grid";
  sidebar.style.marginLeft = "0rem";
});
close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "grid";
  sidebar.style.marginLeft = "-13rem";
});
