var numSlide = 0;
var next = document.getElementById('Next');
var prev = document.getElementById('Prev');
var image = document.getElementById('Image');
var arrayImages = ["Resources/Imagen1.jpg", "Resources/Imagen2.jpg", "Resources/Imagen3.jpg"];


//Retroceder en el slider
prev.addEventListener("click", function(){
    changeImagePrev(numSlide);
    numSlide--;
});

//Avanzar en el slider
next.addEventListener("click", function(){
    changeImageNext(numSlide);
    numSlide++;
});

function changeImagePrev(num){
    image.style.opacity ='0';
    setTimeout(function(){
        var position = (num - 1) % arrayImages.length
        image.src = arrayImages[position];
    }, 500)
    setTimeout(function(){
        image.style.opacity = '0.5';  
    }, 700)
}
function changeImageNext(num){
    image.style.opacity ='0';
    setTimeout(function(){
        var position = (num + 1) % arrayImages.length
        image.src = arrayImages[position];
    }, 500)
    setTimeout(function(){
        image.style.opacity = '0.5';  
    }, 700)
    
}