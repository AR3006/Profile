var progressbar = document.getElementById("progressbar");
var persent = document.getElementById("present");

var totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    var progress = (window.pageYOffset / totalheight) * 100;
    progressbar.style.height = progress + "%";
}