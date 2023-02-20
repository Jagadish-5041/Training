const images = ["firstbgcar1.jpg", "firstbg2.jpg", "firstbg3.jpg" , "firstbg4.jpg" , "firstbg5.jpg" , "firstbg6.jpg", "firstbg7.jpg", "firstbg8.jpg" , "firstbg9.jpg" ,"g1.jpg"];
const textcolor = ["pink" , "white" , "yellow" , "powderblue" , "#white" , "yellow" , "white" , "orange" , "#ee6dff" , "aqua"];


var i = 0;

var bg = document.getElementById("bodytag");
var form = document.getElementById("container");

setInterval(function() {
    bg.style.backgroundImage = ("url(" + images[i] + ")");
    form.style.color = textcolor[i];
    form.style.transition = "3s";
    i = (i < (images.length - 1)) ? (i + 1) : (0);
} , 6000);