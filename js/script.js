window.onload=pageLoaded;
function pageLoaded(){
    var switcherBar = document.getElementById("switcher");
    var theme1 = document.getElementById("theme1-night-with-stars");
    var theme2 = document.getElementById("theme2-colourful-dots");
    var i = 0;
    switcherBar.onclick = changeTheme;
    function changeTheme(){
        i=i+1;
        if(i>1){
            i=0;
        }
        if(i===0){
            theme1.style.display = "block";
            theme2.style.display = "none";
        }
        if(i===1){
            theme1.style.display = "none";
            theme2.style.display = "block";
        }
    }
}