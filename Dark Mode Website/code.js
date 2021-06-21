document.addEventListener("DOMContentLoaded", () =>{
    let nightSwitch = document.getElementById('NightMode')
    let main = document.documentElement;

    checkDarkMode();

    
    
    nightSwitch.addEventListener("click", () =>{
        //Change Switch appereance
        if(nightSwitch.classList.contains('dark')){
            localStorage.setItem("darkMode", false);
        }else{
            localStorage.setItem("darkMode", true);
        }

        checkDarkMode();
       
    })

    function checkDarkMode(){
        let dark = localStorage.getItem("darkMode")
        if(dark=="true"){
            nightSwitch.classList.add('dark');
            main.style.setProperty('--main', "#202020")
            main.style.setProperty('--second', "#F3F3F3")
        }else{
            nightSwitch.classList.remove('dark');
            main.style.setProperty('--main', "#F3F3F3")
            main.style.setProperty('--second', "#202020")
        }
    
    }
})