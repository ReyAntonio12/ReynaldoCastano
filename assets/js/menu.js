document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector('.layout__menu-toggle');
    let hamburger = document.querySelector('.layout__menu-toggle .hamburger');
    let exit = document.querySelector('.layout__menu-toggle .xmark');
    let aside = document.querySelector('.container__aside');

    button.addEventListener("click", (event) => {

        let visible = document.querySelector('.container__aside--visible');

        if(!visible){
            aside.classList.add('container__aside--visible');
            hamburger.style.opacity = 0;
            exit.style.opacity = 1;
        } else{
            aside.classList.remove('container__aside--visible');
            hamburger.style.opacity = 1;
            exit.style.opacity = 0;
        }
    });

    window.addEventListener("resize", (event) => {
        let size = parseInt(document.body.clientWidth);

        if(size <= 1010){
            aside.classList.remove('container__aside--visible');
            hamburger.style.opacity = 1;
            exit.style.opacity = 0;
        }
    });
});