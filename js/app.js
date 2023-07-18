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

let NEWS_click = document.getElementById("NEWS_click");
let SPORTS_click = document.getElementById("SPORTS_click");
let MOVIES_click = document.getElementById("MOVIES_click");
let SERIES_click = document.getElementById("SERIES_click");
let KIDS_click = document.getElementById("KIDS_click");
let num = document.getElementById("num");

let NEWS = document.getElementById("News");
let SPORTS = document.getElementById("Sports");
let MOVIES = document.getElementById("Movies");
let SERIES = document.getElementById("Series");
let KIDS = document.getElementById("Kids");
let All = document.getElementById("All");

NEWS_click.addEventListener("click", function () {
  NEWS.style.display = "block";
  SPORTS.style.display = "none";
  MOVIES.style.display = "none";
  SERIES.style.display = "none";
  All.style.display = "none";
  Kids.style.display = "none";
});

SPORTS_click.addEventListener("click", function () {
  NEWS.style.display = "none";
  SPORTS.style.display = "block";
  MOVIES.style.display = "none";
  SERIES.style.display = "none";
  All.style.display = "none";
  Kids.style.display = "none";
});

MOVIES_click.addEventListener("click", function () {
  NEWS.style.display = "none";
  SPORTS.style.display = "none";
  MOVIES.style.display = "block";
  SERIES.style.display = "none";
  All.style.display = "none";
  Kids.style.display = "none";
});

SERIES_click.addEventListener("click", function () {
  NEWS.style.display = "none";
  SPORTS.style.display = "none";
  MOVIES.style.display = "none";
  SERIES.style.display = "block";
  All.style.display = "none";
  Kids.style.display = "none";
});

KIDS_click.addEventListener("click", function () {
  Kids.style.display = "block";
  NEWS.style.display = "none";
  SPORTS.style.display = "none";
  MOVIES.style.display = "none";
  SERIES.style.display = "none";
  All.style.display = "none";
});

num.addEventListener("click", function () {
  Kids.style.display = "block";
  NEWS.style.display = "block";
  SPORTS.style.display = "block";
  MOVIES.style.display = "block";
  SERIES.style.display = "block";
  All.style.display = "block";
});

let ALL = document.getElementById("ALL");

NEWS_click.addEventListener("click", (e) => {
  ALL.innerText = e.target.innerText;
});

SPORTS_click.addEventListener("click", (e) => {
  ALL.innerText = e.target.innerText;
});

MOVIES_click.addEventListener("click", (e) => {
  ALL.innerText = e.target.innerText;
});

SERIES_click.addEventListener("click", (e) => {
  ALL.innerText = e.target.innerText;
});

KIDS_click.addEventListener("click", (e) => {
  ALL.innerText = e.target.innerText;
});
num.addEventListener("click", (e) => {
  ALL.innerText = e.target.innerText;
});
