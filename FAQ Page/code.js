let collapsibles = document.querySelectorAll('.faq-container')

collapsibles.forEach(element => {
    element.addEventListener("click", () =>{
        element.querySelector('.faq-answer').classList.toggle('open');
        element.querySelector('.question').classList.toggle('active');
        element.querySelector('.arrow-container').classList.toggle('up');
    })
});