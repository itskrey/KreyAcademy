window.addEventListener('load', ()=>{
    var button = document.getElementById('Button')
    var open = false;

    button.addEventListener('click', (e)=>{
        e.preventDefault();

        if(!open){
            button.innerHTML = "Cerrar ventana"
            open = true
        }else{
            button.innerHTML = "mostrar ventana"
            open = false
        }

        document.querySelector('.container').classList.toggle('show')
    })
})