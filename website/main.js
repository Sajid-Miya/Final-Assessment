// toogle menu bar
var navlinks = document.getElementById("navlinks");

function showMenu() {
    navlinks.style.right = "0";
}
function hideMenu() {
    navlinks.style.right = "-200px";
}

// buttom to top

function myFunction() {
    alert("The form was submitted");
}
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}