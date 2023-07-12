window.onload=pageLoaded;
function pageLoaded(){
    /*--Get elements--*/
    //Background change
    var switcherBar = document.getElementById("switcher");
    var smallscreenswitcher = document.getElementById("smallscreen__switch");
    var theme1 = document.getElementById("theme1-night-with-stars");
    var theme2 = document.getElementById("theme2-colourful-dots");
    var theme3 = document.getElementById("theme3-trianglecolorchange");
    var theme4 = document.getElementById("theme4-droppingheart");
    var theme5 = document.getElementById("theme5-bone");

    //Accessories change
    var accessories = document.getElementById("button");
    var smallscreenbutton = document.getElementById("smallscreen__button");
    var sunglasses = document.getElementById("sunglasses");
    var bowTie = document.getElementById("bow-tie");
    var hat = document.getElementById("hat");
    /*--Functions--*/
    var i = 0;
    switcherBar.onclick = changeTheme;
    smallscreenswitcher.onclick=changeTheme;
    document.addEventListener('keypress',changeTheme);
    function changeTheme(){

        i=i+1;
        if(i>4){
            i=0;
        }
        if(i===0){
            theme1.style.display = "block";
            theme2.style.display = "none";
            theme3.style.display="none";
            theme4.style.display="none";
            theme5.style.display="none";
        }
        if(i===1){
            theme1.style.display = "none";
            theme2.style.display = "block";
            theme3.style.display="none";
            theme4.style.display="none";
            theme5.style.display="none";
        }
        if(i===2){
            theme1.style.display = "none";
            theme2.style.display = "none";
            theme3.style.display="block";
            theme4.style.display="none";
            theme5.style.display="none";
        }
        if(i===3){
            theme1.style.display = "none";
            theme2.style.display = "none";
            theme3.style.display="none";
            theme4.style.display="block";
            theme5.style.display="none";
        }
        if(i===4){
            theme1.style.display = "none";
            theme2.style.display = "none";
            theme3.style.display="none";
            theme4.style.display="none";
            theme5.style.display="block";
        }
        console.log(switcherBar.style.animation);
        switcherBar.style.animation = "switchermove 1s";

        
    }

    switcherBar.addEventListener("animationend", reset);
    function reset(){
        switcherBar.style.animation = "switchoriginalposition 0.1s";
    }



    var j = 0;
    accessories.onclick = changeAccessories;
    smallscreenbutton.onclick = changeAccessories;
    function changeAccessories(){
        j=j+1;
        if(j>3){
            j=0;
        }
        if(j===0){
            sunglasses.style.display = "none";
            bowTie.style.display = "none";
            hat.style.display = "none";
        }
        if(j===1){
            sunglasses.style.display = "block";
            bowTie.style.display = "none";
            hat.style.display = "none";
        }
        if(j===2){
            sunglasses.style.display = "none";
            bowTie.style.display = "block";
            hat.style.display = "none";
        }
        if(j===3){
            sunglasses.style.display = "none";
            bowTie.style.display = "none";
            hat.style.display = "block";
        }
    }
    
    
}