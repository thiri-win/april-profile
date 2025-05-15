const toggle = document.querySelector("#toggle")
const menu = document.querySelector(".menu")

toggle.addEventListener("click", function() {
    menu.classList.toggle("active")
    toggle.children[0].classList.toggle('fa-xmark')
})

window.addEventListener("resize", function() {
    if(window.innerWidth <= 990) {
        menu.classList.remove('active')
    }
})

const nav = document.querySelector("nav")
window.addEventListener('scroll', function() {
    if(window.scrollY >= 150) {
        nav.classList.add('bg-white');
    } else {
        nav.classList.remove('bg-white');
    }
})

AOS.init({
    duration: 2000,
});