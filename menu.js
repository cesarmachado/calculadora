window.addEventListener('load', () => {
    let menuDropDown = document.getElementById('user')
    let subNavBar = document.getElementById('subnavbar')
    let darkMode = document.getElementById('checkbox')
    


    menuDropDown.addEventListener('click', () => {
       subNavBar.classList.toggle('visible') 
    })

    // const checkbox = document.getElementById('checkbox')

    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark')
    })

})

