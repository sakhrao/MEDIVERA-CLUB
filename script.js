let elementsArray = document.querySelectorAll(".reveal");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();




function closepreloader(){

document.getElementById("preloader").style.display = 'none';

}

window.addEventListener("load",function(){ setTimeout(closepreloader, 2000);

});
