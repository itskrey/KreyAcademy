var header = document.getElementById('Header')
var search = document.getElementById('SearchBox')
var menu = document.getElementById('SecondMenu')
var specialMenuItem = document.getElementById('Special')
var logo = document.querySelector('.st0')



window.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    if(scrollY>0){
        header.style.backgroundColor = 'white';
        header.style.color = 'var(--second-color)';
        logo.style.fill = 'var(--second-color)';
        specialMenuItem.classList.add('special-scrolled');

    }
    else{
        header.style.backgroundColor = 'transparent';
        header.style.color = 'white';
        logo.style.fill = 'white';
        specialMenuItem.classList.remove('special-scrolled');
    }


    //Second menu and search condition
    if(scrollY>10){
        menu.classList.add('scrolled-second-menu');
        search.classList.add('scrolled-search');
    }
    else{
        menu.classList.remove('scrolled-second-menu');        
        search.classList.remove('scrolled-search');
    }

})