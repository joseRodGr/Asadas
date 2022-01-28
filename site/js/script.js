let toggleButton = document.querySelector('.but-toggle');
let menu_var = document.querySelector('.nav-list');
let logo = document.querySelector('.logo');


toggleButton.addEventListener('click', () => {
    menu_var.classList.toggle('active-control');
});

window.addEventListener('scroll', () => {
    menu_var.classList.remove('active-control');
});

logo.addEventListener('click', () => {
    menu_var.classList.remove('active-control');
});


for (const item of menu_var.childNodes){
    item.addEventListener('click', () => {
        menu_var.classList.remove('active-control');
    });
}