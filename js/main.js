let elModalWrapper = document.querySelector(".modal")
let elOpen = document.querySelector(".open-icon")
let elClose = document.querySelector(".close-icon")
let elSun = document.querySelector(".dark-item")

function handleMenuIconOpen(){
    elModalWrapper.classList.add("show")
    elClose.classList.add("close-show")
    elOpen.classList.add("hide")
}
function handleMenuIconClose(){
    elModalWrapper.classList.remove("show")
    elClose.classList.remove("close-show")
    elOpen.classList.remove("hide")
}
function CloseList(){
    elModalWrapper.classList.remove("show")
    elClose.classList.remove("close-show")
    elOpen.classList.remove("hide")
}
function darkMode(){
    elSun.classList.toggle("right")
    document.body.classList.toggle("dark")
}