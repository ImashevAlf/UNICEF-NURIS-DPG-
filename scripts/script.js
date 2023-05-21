document.getElementById("main-action").onclick=function () {
    document.getElementById("cars").scrollIntoView({behavior:"smooth"});
}

var buttons=document.getElementsByClassName("car-button");
for (var i=0; i<buttons.length; i++){
    buttons[i].onclick = function (){
        document.getElementById("price").scrollIntoView({behavior:"smooth"});
    }
}

document.getElementById("price-action").onclick=function () {
   if(document.getElementById("name").value ==="") {
       alert("Fill The CAR");
   } else if (document.getElementById("phone").value ==="") {
       alert("Fill the Phone");
   } else if (document.getElementById("car").value ==="") {
       alert("Fill the CAR");
   } else{
       alert("Thank you for the request");
   }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.4) / 4) + 'px,' + ((event.clientY * 0.4) / 4) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.5 * window.pageYOffset) + 'px';
    })
});