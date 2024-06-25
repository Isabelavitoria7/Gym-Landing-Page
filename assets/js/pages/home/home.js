document.addEventListener('scroll', function() {
    const setaDivisoria = document.querySelector('.seta-divisoria');
    if (window.scrollY > 0) {
        setaDivisoria.classList.add('hidden');
    } else {
        setaDivisoria.classList.remove('hidden');
    }
});

document.addEventListener('scroll', function(){
    const setaDivisoria = document.querySelector('.seta-divisora')
    if(window.scrollY > 0) {
        setaDivisoria.classList.add('hidden')
    } else{
        setaDivisoria.classList.remove('hidden')
    }
})