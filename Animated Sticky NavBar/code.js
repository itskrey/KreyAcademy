var header = document.getElementById('Header');

document.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    if(scroll > 10){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})