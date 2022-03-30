const fixMenu = (menu_selector) => {
    const menu = document.querySelector(menu_selector)
    let lastScrollPos = 0
    window.addEventListener("scroll", function (e) {
        let currentScrollPos = window.pageYOffset
        if (currentScrollPos > window.innerHeight) {
            menu.classList.add("_fix")
            menuPosition(currentScrollPos)
        } else {
            menu.classList.remove("_fix")
            menu.classList.remove("_down")
        }
    })

    function menuPosition(cur) {
        if (cur > lastScrollPos) {
            menu.classList.remove("_down")
        } else {
            setTimeout(() => {
                menu.classList.add("_down")
            }, 100)
        }
        lastScrollPos = cur
    }
}

export default fixMenu
