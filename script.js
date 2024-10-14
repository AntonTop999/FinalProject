let menu = document.querySelector(".fixed-menu")
menu.addEventListener("click", function(event){
    let clicktarget = event.target
    let activebtn =  document.querySelector(".active")
    if (clicktarget.classList.contains('nav-link')) {
        activebtn.classList.remove('active');
        clicktarget.classList.add('active');
        let mobile = document.querySelector(".mobile-menu")
        if (!mobile.classList.contains("hide")){
            mobile.classList.add("hide")
        }
    }
    let body = document.querySelector("body")
    let mobilemenu = document.querySelector(".mobile-menu")
    if (!body.classList.contains("offscroll")&&!mobilemenu.classList.contains("hide")){
        body.classList.add("offscroll")
    }
    else{
        body.classList.remove("offscroll")
    }
})
let classlink =  ".main-link"
window.onscroll = function(){
    let h = document.documentElement.clientHeight;
    if (window.scrollY >= h*3.7){
        classlink = ".comments-link"
    }
    else if (window.scrollY >= h*2.7){
        classlink = ".works-link"
    }
    else if (window.scrollY >= h*1.8){
        classlink = ".skills-link"
    }
    else if (window.scrollY >= h*0.8){
        classlink = ".about-link"
    }
    else {
        classlink = ".main-link"
    }
    let activebtn = document.querySelector(".active")
    let newactivebutton = document.querySelector(classlink)
    if (!newactivebutton.classList.contains("active")){
        activebtn.classList.remove("active")
        newactivebutton.classList.add("active")
    }
}
document.querySelector(".mobile-button").addEventListener("click",function(event){
    document.querySelector(".mobile-menu").classList.toggle("hide")
})