var hamburguer = document.getElementById('Hamburguer')
var menu = document.getElementById('Menu')

hamburguer.addEventListener("click", function(){
    menu.classList.toggle('open')
})