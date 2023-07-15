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

// let link_vall = document.getElementById("link_vall");

// let ALL = document.getElementById("ALL");
// let video = document.getElementById("video");

// let num = document.getElementById("num");
// num.innerText = video.children.length;

// link_vall.addEventListener("click", (e) => {
//   if (e.target.id !== "link_vall") {
//     console.log(e.target.innerText);
//     // let fun = Math.floor(Math.random() * (10 - 5) + 5);
//     if (e.target.innerText == "MOVIES") {
//       fun = 5;
//     }
//     video.innerHTML = div.repeat(fun);
//     num.innerText = fun;
//   }

//   ALL.innerText = e.target.innerText;
// });

// console.log(video);

// let NEWS_click = document.getElementById("NEWS_click");
// let SPORTS_click = document.getElementById("SPORTS_click");
// let MOVIES_click = document.getElementById("MOVIES_click");
// let SERIES_click = document.getElementById("SERIES_click");
// let KIDS_click = document.getElementById("MOVIES_click");

// let NEWS = document.getElementById("NEWS");
// let SPORTS = document.getElementById("SPORTS");
// let MOVIES = document.getElementById("MOVIES");
// let SERIES = document.getElementById("SERIES");
// let KIDS = document.getElementById("MOVIES");

// NEWS_click.addEventListener("click", function () {
//   NEWS.style.display = "block";
// });
