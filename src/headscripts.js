const all_menu = document.querySelectorAll(".menu")

    function ativar_menu(menu) {
        all_menu.forEach((element) => {
            if (menu == element) {
                element.classList.toggle("ativo")
                menu.classList.toggle("hidden_menu")
            }else{
                element.classList.remove("ativo")
                element.classList.add("hidden_menu")    
            }
        })
        console.log(menu)
    }