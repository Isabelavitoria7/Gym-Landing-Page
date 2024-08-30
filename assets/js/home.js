
const menuHamburguer = document.querySelector(".hamburguer");
const showLinks = document.querySelector(".links");

menuHamburguer.addEventListener('click', function(){
    if(menuHamburguer.classList.contains('active')){
        showLinks.style.display = 'flex';
    }else{
        showLinks.style.display = 'none';
    }
})

function adjustMenuDisplay() {
    if (window.innerWidth > 800) {
        showLinks.style.display = 'flex';
    } else if (!menuHamburguer.classList.contains('active')) {
        showLinks.style.display = 'none';
    }
}

window.addEventListener('scroll', function() {
    if (menuHamburguer.classList.contains('active')) {
        menuHamburguer.classList.remove('active');
        showLinks.style.display = 'none';
    }
});

// Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', function(event) {
    if (!menuHamburguer.contains(event.target) && !showLinks.contains(event.target)) {
        if (menuHamburguer.classList.contains('active')) {
            menuHamburguer.classList.remove('active');
            showLinks.style.display = 'none';
        }
    }
});

window.addEventListener('resize', adjustMenuDisplay);

document.addEventListener('scroll', function() {
    const setaDivisoria = document.querySelector('.container-divisoria');
    if (window.scrollY > 0) {
        setaDivisoria.classList.add('hidden');
    } else {
        setaDivisoria.classList.remove('hidden');
    }
});


