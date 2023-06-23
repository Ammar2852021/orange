
let sidebar = document.getElementById('sidebar');

burger.addEventListener('click',function myFunction() {
    var burger = document.getElementById("burger");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
  }
)



