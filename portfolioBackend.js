// let button_logo = document.getElementById('menu-toggle');
// let nav_bar = document.getElementById('nav-right');
// let nav_links = document.querySelectorAll('.inlist');

// button_logo.addEventListener('click', () => {

//     // toggle menu
//     if (nav_bar.style.display === "flex") {
//         nav_bar.style.display = "none";
//     } else {
//         nav_bar.style.display = "flex";
//         nav_bar.style.flexDirection = "column";
//         nav_bar.style.position = "absolute";
//         nav_bar.style.top = "78px";
//         nav_bar.style.left = "0";
//         nav_bar.style.width = "100%";
//         // nav_bar.style.backgroundColor = "rgb(255, 213, 0)";
//         nav_bar.style.alignItems = "center";
//         nav_bar.style.gap = "25px";
//         nav_bar.style.padding = "20px 0";
//     }

//     // apply styles to links
//     nav_links.forEach(link => {
//         link.style.textDecoration = "none";
//         link.style.color = "#222";
//     });
// });

// nav_links.forEach(link => {
//     link.addEventListener('click', () => {
//         nav_bar.style.display = "none";
//     });
// });

const menuToggle = document.getElementById("menu-toggle");
const navBar = document.getElementById("nav-right");
const navLinks = document.querySelectorAll(".inlist");

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("tg");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navBar.classList.remove("tg");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navBar.classList.remove("tg");
    }
});








