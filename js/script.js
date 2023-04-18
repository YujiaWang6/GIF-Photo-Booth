window.onload=pageLoaded;
function pageLoaded(){
    var switcherBar = document.getElementById("switcher");
    var theme1 = document.getElementById("theme1-night-with-stars");
    var theme2 = document.getElementById("theme2-colourful-dots");
    var theme3 = document.getElementById("theme3-trianglecolorchange");
    var theme4 = document.getElementById("theme4-droppingheart");
    var theme5 = document.getElementById("theme5-bone");
    var i = 0;
    switcherBar.onclick = changeTheme;
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
    }
}