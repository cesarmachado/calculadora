window.addEventListener('load', () => {
    let menuDropDown = document.getElementById('user')
    let subNavBar = document.getElementById('subnavbar')

    menuDropDown.addEventListener('click', () => {
       subNavBar.classList.toggle('visible')
    })
})