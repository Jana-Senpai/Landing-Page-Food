document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.navbar-item')
    navList.classList.toggle('show')
})

window.onresize = function() {
    var navList = document.querySelector('.navbar-item')
    if(window.innerWidth < 768 && navList.classList.contains('show')){
        navList.classList.remove('show')
    }
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar')
    if (window.scrollY > 0){
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

document.addEventListener('click', function(e) {
    var navList = document.querySelector('.navbar-item')
    var menuIcon = document.getElementById('menu-icon')

    if(!navList.contains(e.target) && e.target !== menuIcon){
        navList.classList.remove('show')
    }
})