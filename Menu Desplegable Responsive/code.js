window.addEventListener('load', ()=>{
    var menu = document.getElementById('Menu'),
        hamburguer = document.querySelector('.hamburguer'),
        header = document.getElementById('Header');

    
    hamburguer.addEventListener('click', ()=>{
        menu.classList.toggle('open')
        header.classList.toggle('active')
    })
})