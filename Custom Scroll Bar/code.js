
    const scroll = document.querySelector('.progress-scroll')
    const scrollText = document.querySelector('.scrolled')
    const windowHeight = document.body.clientHeight
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >0){
            scrolled = (window.scrollY / (windowHeight - window.innerHeight)) * 100
            scroll.style.height = scrolled + '%' 
            scrollText.innerHTML = Math.round(scrolled) + '%'
        }
        
    })
