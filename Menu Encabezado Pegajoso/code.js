var header = document.getElementById('Header')

window.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    if(scrollY>0){
        header.style.backgroundColor = '#121212';

    }
    else{
        header.style.backgroundColor = 'transparent';
    }

})