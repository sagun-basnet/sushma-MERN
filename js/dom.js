// const btn = document.getElementById("btn");
// const btn = document.getElementsByClassName("clickBtn");
// const btn = document.getElementsByTagName("button")
const btn = document.querySelector(".clickBtn");
const div = document.querySelector("div");
// console.log(btn[0]);

btn.addEventListener("click", () => {
  //   div.style.backgroundColor = "black";
  div.style.display = "block";
});
