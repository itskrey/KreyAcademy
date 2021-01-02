$(window).scroll(function(){
    var scrollTop = window.scrollY;
    if(scrollTop>10){
        document.querySelector('.headerContainer').style.backgroundColor = 'white';
        document.querySelector('.headerContainer').style.boxShadow = '0px 0px 4px rgba(0,0,0,0.5)';
        document.querySelector('.logo').style.filter = 'invert(1)';
        document.querySelector('.menuContainer').style.filter = 'invert(1)';
        document.querySelector('.menuHamburguer').style.filter = 'invert(1)';
    }else{
        document.querySelector('.headerContainer').style.backgroundColor = 'transparent';
        document.querySelector('.headerContainer').style.boxShadow = 'none';
        document.querySelector('.logo').style.filter = 'invert(0)';
        document.querySelector('.menuContainer').style.filter = 'invert(0)';
        document.querySelector('.menuHamburguer').style.filter = 'invert(0)';

    }
});