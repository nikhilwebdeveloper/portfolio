// preloader
let preloader = document.getElementById('loading');

function myFunction(){
    preloader.style.display = "none";
}

function openMenu(){
    document.getElementById("navbar").style.left = "0px";
    document.body.style.overflowY = "hidden"
}

function closeMenu(){
    document.getElementById("navbar").style.left = "-280px";
    document.body.style.overflowY = "auto"
}

function closeIntro(){
    document.getElementById("intro-container").style.display = "none"
    document.body.style.overflowY = "auto"
    document.getElementById("dark-bg").style.display = "none"
}






// alert("Hey, Welcome to my page Thank you for visit my page keep loving and supporting 😍")
