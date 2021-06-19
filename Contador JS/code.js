let hours = document.getElementById('Hours'),
    min = document.getElementById('Min'),
    seg = document.getElementById('Seg');

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;


let date = "Sep 30, 2021 00:00:00",
    countDown = new Date(date).getTime(),
    x = setInterval(function() {    

    let now = new Date().getTime(),
    distance = countDown - now;

    hours.innerText = Math.floor((distance % (day)) / (hour)),
    min.innerText = Math.floor((distance % (hour)) / (minute)),
    seg.innerText = Math.floor((distance % (minute)) / second);
}, 0)
