
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
        document.getElementById('Slider').style.transform = 'translateX(-25%)';
        changeImagePrev(numSlide);
        numSlide--;
    }
    else if(numSlide==3){
        document.getElementById('Slider').style.transform = 'translateX(-50%)';
        changeImagePrev(numSlide);
        numSlide--;
    }
    else if(numSlide==4){
        document.getElementById('Slider').style.transform = 'translateX(-75%)';
        changeImagePrev(numSlide);
        numSlide--;
    }
});

//Avanzar en el slider
next.addEventListener("click", function(){
    if(numSlide==0){
        document.getElementById('Slider').style.transform = 'translateX(-25%)';
        changeImageNext(numSlide);
        numSlide++;
    }
    else if(numSlide==1){
        document.getElementById('Slider').style.transform = 'translateX(-50%)';
        changeImageNext(numSlide);
        numSlide++;
    }
    else if(numSlide==2){
        document.getElementById('Slider').style.transform = 'translateX(-75%)';
        changeImageNext(numSlide);
        numSlide++;
    }
});



function changeImageNext(num){
    if(num==0){
        image.style.opacity = '0';
        setTimeout(function(){
            image.src = 'Resources/Vietnam.jpg'
            image.style.opacity = '0.5';
        },500)
    }
    else if(num==1){
        image.style.opacity = '0';
        setTimeout(function(){
            image.src = 'Resources/Philippines.jpg'
            image.style.opacity = '0.5';
        },500)
    }
    else if(num==2){
        image.style.opacity = '0';
        setTimeout(function(){
            image.src = 'Resources/Thailand.jpg'
            image.style.opacity = '0.5';
        },500)
    }
}


function changeImagePrev(num){
    if(num==1){
        image.style.opacity = '0';
        setTimeout(function(){
            image.src = 'Resources/Germany.jpg'
            image.style.opacity = '0.5';
        },500)
    }
    else if(num==2){
        image.style.opacity = '0';
        setTimeout(function(){
            image.src = 'Resources/Vietnam.jpg'
            image.style.opacity = '0.5';
        },500)
    }
    else if(num==3){
        image.style.opacity = '0';
        setTimeout(function(){
            image.src = 'Resources/Philippines.jpg'
            image.style.opacity = '0.5';
        },500)
    }
}