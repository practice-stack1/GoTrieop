import mobMenu from "./basic/mobileMenu.js"
import slowmotion from "./basic/slowAnchorMove.js"
// import fixMenu from "./basic/fixMenu.js"
import "./basic/mouse-parallax.js"
import "./basic/swiperConfig.js"
import rating from "./basic/rating.js"
import fix from "./basic/fixableMenu.js"

window.addEventListener("DOMContentLoaded", () => {
    mobMenu(".header__burger", ".menu", ".menu .menu__item", "_active")
    slowmotion('[href^="#"]')
    // fixMenu(".header")
    fix(".header")
    rating("[data-rating]", ".rating__active")
})
