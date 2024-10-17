// Scroll Function
var nav = document.querySelector("nav")

window.onscroll = function(){
    if(window.scrollY > 0){
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")
    }
}



// Mobile Sidebar Function
const menu = document.querySelector("nav .mobile_menu i")
const menu_closes = document.querySelector("nav .mobile_close")
const menu_close = document.querySelector("nav .mobile_close i")
const sidebar = document.querySelector("nav ul")

menu.addEventListener("click",function(){
    sidebar.classList.add("active")
    menu_closes.style.left = "0"
})
menu_close.addEventListener("click",function(){
    sidebar.classList.remove("active")
    menu_closes.style.left = "-100%"
})



// Scroll Function