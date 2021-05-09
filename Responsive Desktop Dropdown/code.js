var menuItem = document.getElementById('MenuItem');

menuItem.addEventListener("mouseenter", function(){
    document.getElementById('Dropdown').classList.add('open');
});
menuItem.addEventListener("mouseleave", function(){
    document.getElementById('Dropdown').classList.remove('open');
});