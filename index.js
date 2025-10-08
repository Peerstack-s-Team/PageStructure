const mobileNav = document.querySelector(".mobile-nav")
const mobileNavOverlay = document.querySelector(".mobile-nav--overlay")
    
const openBtn = document.querySelector("#open")
const closeBtn = document.querySelector("#close")


openBtn.addEventListener("click", () => {
    mobileNav.classList.add("mobile-nav--open")
    mobileNavOverlay.style.display = "block"
})


closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("mobile-nav--open")
    mobileNavOverlay.style.display = "none"
})
