const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.toggle');


const menu = () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');

        toggle.innerHTML = ` <i class="fas fa-bars"></i>`;
    } else {
        navbar.classList.add('active');
        toggle.innerHTML = ` <i class="fas fa-times"></i>` 
    }
}

toggle.addEventListener('click', menu);