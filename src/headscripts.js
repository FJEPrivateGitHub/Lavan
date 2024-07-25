    const toggleBtn = document.querySelector('.toggle_btn')
    const closeXBnt = document.querySelector('.closeX_bnt')
    const dropDownMenu = document.querySelector('.dropdown_menu')
    const userBnt = document.querySelector('.user_bnt')
    const userBntx = document.querySelector('.user_bnt_x')
    const userMenu = document.querySelector('.user_menu')
    const searchBnt = document.querySelector('.search_bnt')
    const searchBntx = document.querySelector('.search_bnt_x')
    const searchMenu = document.querySelector('.search_menu')

    //script para o Header Menu
    toggleBtn.onclick = function () {
        dropDownMenu.style.right = "0rem"

        searchBntx.style.display = "none"
        searchBnt.style.display = "flex"
        searchMenu.style.display = "none"
        userBntx.style.display = "none"
        userBnt.style.display = "flex"
        userMenu.style.display = "none"
    }

    closeXBnt.onclick = function () {
        dropDownMenu.style.right = "-42.5rem"
    }

    //script para o User Menu
    userBnt.onclick = function () {
        userBnt.style.display = "none"
        userBntx.style.display = "flex"
        userMenu.style.display = "block"

        searchBntx.style.display = "none"
        searchBnt.style.display = "flex"
        searchMenu.style.display = "none"

    }

    userBntx.onclick = function () {
        userBnt.style.display = "flex"
        userBntx.style.display = "none"
        userMenu.style.display = "none"

    }

    //script para o Search Menu
    searchBnt.onclick = function () {
        searchBnt.style.display = "none"
        searchBntx.style.display = "flex"
        searchMenu.style.display = "flex"

        userBntx.style.display = "none"
        userBnt.style.display = "flex"
        userMenu.style.display = "none"
    }

    searchBntx.onclick = function () {
        searchBnt.style.display = "flex"
        searchBntx.style.display = "none"
        searchMenu.style.display = "none"
    }