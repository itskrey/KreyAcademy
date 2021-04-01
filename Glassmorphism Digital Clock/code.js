var myVar = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    var d = new Date();
    var minutos = d.getMinutes();
    var horas = d.getHours();

    if(horas>=12){
        horas = horas-12;
    }
    document.getElementById("Hours").innerHTML = d.toLocaleTimeString([], {hour: '2-digit'});
    document.getElementById("Minutes").innerHTML = d.toLocaleTimeString([], {minute:'2-digit'});
  }