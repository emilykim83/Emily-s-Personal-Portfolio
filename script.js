const header=document.querySelector("navlist");

window.addEventListener("scroll", function(){
    navlist.classList.toggle("sticky", window.scrollY>200)
});
