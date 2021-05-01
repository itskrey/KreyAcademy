var button = document.getElementById('Button')

var colors = ["#d8e3e7", "#51c4d3", "#126e82", "#132c33", "#542e71", "#fdca40", "#a799b7"]

button.addEventListener("click", function(e){
    e.preventDefault();
    var i = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[i]
})