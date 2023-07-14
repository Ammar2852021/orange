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

let link_vall = document.getElementById("link_vall");

let ALL = document.getElementById("ALL");
let video = document.getElementById("video");

let num = document.getElementById("num");
num.innerText = video.children.length;
let div = `
<div class="message anim" style="--delay: .4s">
<div class="author-img__wrapper video-author video-p">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<div class="author-img"></div>
</div>
<div class="msg-wrapper">
<div class="msg__name video-p-name"> Thomas Hope</div>
<div class="msg__content video-p-sub"> recusandae doloremque aperiam alias molestias</div>
</div>
</div>
`;
let fun = 8;

link_vall.addEventListener("click", (e) => {
  if (e.target.id !== "link_vall") {
    console.log(e.target.innerText);
    // let fun = Math.floor(Math.random() * (10 - 5) + 5);
    if (e.target.innerText == "MOVIES") {
      fun = 5;
    }
    video.innerHTML = div.repeat(fun);
    num.innerText = fun;
  }

  ALL.innerText = e.target.innerText;
});

console.log(video);
