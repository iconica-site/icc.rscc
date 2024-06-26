



let burgerBlock = document.querySelector('.adaptiveNavBlock');
let button = document.querySelector('.adaptiveNavBurgerBtn');
let listA = document.querySelectorAll('.adaptiveNavBlock a');

let stick1 = document.querySelector('.stick1');
let stick2 = document.querySelector('.stick2');
let stick3 = document.querySelector('.stick3');

let body = document.querySelector('body');

button.addEventListener('click', function() {
    if (burgerBlock.style.height === "100%") {
        burgerBlock.style.height = "0%";
        body.style.overflow = "auto"
        listA.forEach(function(item) {
            item.style.display = "none";
        });

        stick1.style.transform = "";
        stick1.style.top = "";
        stick2.style.display = "";
        stick3.style.transform = "";
    } else {
        burgerBlock.style.height = "100%";
        body.style.overflow = "hidden"
        listA.forEach(function(item) {
            item.style.display = "block";
        });

        stick1.style.transform = "rotateZ(-40deg)";
        stick1.style.top = "7px"



        stick2.style.display = "none";
        stick3.style.transform = "rotateZ(40deg)";
        
    }
});
