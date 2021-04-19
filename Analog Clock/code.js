var seconds = document.getElementById('Seconds');
var minutes = document.getElementById('Minutes');
var hours = document.getElementById('Hours');

setInterval(function(){
    var date = new Date();
    //Segundos
    var second = date.getSeconds();
    var grados = 180 + second*6;
    seconds.style.transform = 'translateX(-50%) rotate('+grados+'deg)';

    //Minutos
    var minute = date.getMinutes();
    console.log(minute);
    var grados = 180 + minute*6;
    minutes.style.transform = 'translateX(-50%) rotate('+grados+'deg)';

    //Horas
    var hour = date.getHours();
    if(hour>=12)
        hour = hour-12;
    var grados = 180 + hour*30;
    hours.style.transform = 'translateX(-50%) rotate('+grados+'deg)';
},1000);

