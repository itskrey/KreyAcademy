$('#Register').click(function(){
    document.getElementById('Container').style.transform = 'rotateY(360deg)';
    setTimeout(function(){
        document.getElementById('LoginContainer').style.display = 'none';
        document.getElementById('RegisterContainer').style.display = 'flex';

    }, 400);
});
$('#Login').click(function(){
    document.getElementById('Container').style.transform = 'rotateY(0deg)';
    setTimeout(function(){
        document.getElementById('LoginContainer').style.display = 'flex';
        document.getElementById('RegisterContainer').style.display = 'none';

    }, 400);
});