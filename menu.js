window.addEventListener('load', () => {
    let menuDropDown = document.getElementById('user')
    let subNavBar = document.getElementById('subnavbar')
    let colorDropDown = document.getElementById('colorTheme')
    let colorNavBar = document.getElementById('colorSubNav')
    // const darkMode = document.getElementById('checkbox')


    menuDropDown.addEventListener('click', () => {
       subNavBar.classList.toggle('visible') 
    })

    colorDropDown.addEventListener('click', () => {
       colorNavBar.classList.toggle('visible') 
    })

    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    })

})

const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('click', () => {
document.body.classList.toggle('dark');
})