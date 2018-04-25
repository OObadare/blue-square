
var script = () => {
  var button = document.getElementById("bluesquare");
  button.addEventListener("click", () => {
    button.classList.add("moveme");
  });
};

document.addEventListener("DOMContentLoaded", script);
