$(window).ready(function(){
    var heroHeight = $('#Hero').innerHeight();
    var top = heroHeight+'px';
    document.querySelector('#ShapeLeft').style.top = top;
});

$(window).resize(function(){
    var heroHeight = $('#Hero').innerHeight();
    var top = heroHeight+'px';
    document.querySelector('#ShapeLeft').style.top = top;
});


window.addEventListener("scroll", function(){
    if(window.scrollY>=10){
        document.querySelector('#Header').style.backgroundColor = 'rgba(0,0,0,0.7)';
        document.querySelector('#Header').style.backdropFilter = 'blur(10px)';
    }else{
        document.querySelector('#Header').style.backgroundColor = 'transparent';
        document.querySelector('#Header').style.backdropFilter = 'none';
    }
});