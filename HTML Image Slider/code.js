var numSlide = 0;
var next = document.getElementById('Next');
var prev = document.getElementById('Prev');
var image = document.getElementById('Image');

//Retroceder en el slider
prev.addEventListener("click", function(){
    if(numSlide==1){
        document.getElementById('Slider').style.transform = 'translateX(0%)';
        changeImagePrev(numSlide);
        numSlide--;
    }
    else if(numSlide==2){
        document.getElementById('Slider').style.transform = 'translateX(-33.33%)';
        changeImagePrev(numSlide);
        numSlide--;
    }
    else if(numSlide==3){
        document.getElementById('Slider').style.transform = 'translateX(-66.66%)';
        changeImagePrev(numSlide);
        numSlide--;
    }
});

//Avanzar en el slider
next.addEventListener("click", function(){
    if(numSlide==0){
        document.getElementById('Slider').style.transform = 'translateX(-33.33%)';
        changeImageNext(numSlide);
        numSlide++;
    }
    else if(numSlide==1){
        document.getElementById('Slider').style.transform = 'translateX(-66.66%)';
        changeImageNext(numSlide);
        numSlide++;
    }
});


var arrayImages = ["Resources/Car1.jpg", "Resources/Car2.jpg", "Resources/Car3.jpg"];

function changeImagePrev(num){
    image.style.opacity ='0';
    setTimeout(function(){
        image.src = arrayImages[num-1];
        image.style.opacity = '0.5';
    }, 470);
}
function changeImageNext(num){
    image.style.opacity ='0';
    setTimeout(function(){
        image.src = arrayImages[num+1];
        image.style.opacity = '0.5';
    }, 470);
}