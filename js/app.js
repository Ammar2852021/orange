let sidebar = document.getElementById("sidebar");

burger.addEventListener("click", function myFunction() {
  var burger = document.getElementById("burger");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
});

// TOP & BUT

let topicons = document.getElementById("top-icons");
let buticons = document.getElementById("but-icons");

buticons.addEventListener("click", function () {
  buticons.style.display = "none";
  topicons.style.display = "block";
});
topicons.addEventListener("click", function () {
  topicons.style.display = "none";
  buticons.style.display = "block";
});

let orange = document.getElementById("name");

orange.addEventListener("click", function () {
  console.log(12222);
});
