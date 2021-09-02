let images = document.querySelectorAll('.image-wrapper .gallery-image')
let position = 0;
const imageZoom = document.querySelector('.image-container .gallery-image'),
    zoomContainer = document.querySelector('.gallery-zoom-container'),
    arrowLeft = document.getElementById('Left'),
    arrowRight = document.getElementById('Right');

//Open image zoom
images.forEach(image => {
    image.addEventListener('click', (e)=>{
        //Open image container
        zoomContainer.classList.add('gallery-zoom-container_active')

        //Set image
        setImageZoom(getImagePosition(e));
    })
});

//Close image zoom
zoomContainer.addEventListener('click', (e)=>{
    let className = e.target.className;
    if(!(className.includes('gallery-image') || className.includes('arrow'))){
        zoomContainer.classList.remove('gallery-zoom-container_active')
    }
})


//Get image position
function getImagePosition(e){
    let image = e.target;
    for(i=0; i<images.length;i++){
        if(images[i].src == image.src){
            position=i;
            return i;
        }
    }
}

//Set image 
function setImageZoom(position){
    imageZoom.src = images[position].src;
}


//Arrows behaviour
arrowLeft.addEventListener('click', ()=>{
    if(position==1){
        arrowLeft.classList.add('arrow_disabled')
        position--;
        setImageZoom(position);
    }else if(position!=0){
        arrowRight.classList.remove('arrow_disabled')
        position--;
        setImageZoom(position);
    }
})
arrowRight.addEventListener('click', ()=>{
    if(position==(images.length-2)){
        arrowRight.classList.add('arrow_disabled')
        position++;
        setImageZoom(position);
    }else if(position!=images.length){
        position++;
        setImageZoom(position);
        arrowLeft.classList.remove('arrow_disabled')
    }
})