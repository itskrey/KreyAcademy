
$(document).ready(function(){

    const loader = document.querySelector('.loading-text')
    let initial = 0;
    let length = 3;

    let interval = setInterval(()=>{
        loader.innerHTML = addZeros(initial) + '%'
        initial++
        if(initial>100){ clearInterval(interval); animateScreen()}
    }, 60)
    

    function addZeros(num){

        numero = ''+num
        numero = numero.padStart(3, '0')
        
        return numero;
    }

    function animateScreen(){
        setTimeout(function(){
            $('#Cover').addClass('hidden');
        }, 1200); 
    }
});




























