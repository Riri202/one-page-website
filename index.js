const closeBtn = document.querySelector('.close')
const openBtn = document.querySelector('.open')
const menu = document.querySelector('.menu')
const navLinks = document.querySelector('.nav_links')
const aboutMe = document.querySelector('.about_me')


menu.addEventListener('click', function() {
    openBtn.classList.toggle('none')
    closeBtn.classList.toggle('block')
    navLinks.classList.toggle('toggle')
    aboutMe.classList.toggle('toggle')

    
})
