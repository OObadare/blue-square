
var script = () => {
  var button = document.getElementById("bluesquare");
  var rays = document.getElementById("rays");
  button.addEventListener("click", () => {
    button.classList.add("moveme");
    setTimeout( () => {
      rays.style.display = "block";
      rays.classList.add("rotateme");
    }, 6000);
  });
};

document.addEventListener("DOMContentLoaded", script);
