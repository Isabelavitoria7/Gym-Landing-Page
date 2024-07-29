document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.personal-carousel');
    const chevrons = document.querySelectorAll('.chevron');
    let currentIndex = 0;
    const totalItems = document.querySelectorAll('.personal').length;

    function updateCarrousel() {
        carousel.style.transform = `translateX(${-(currentIndex * 100)}%)`;
    }

    chevrons.forEach(chevron => {
        chevron.addEventListener('click', function() {
            if (chevron.classList.contains('chevron-left')) {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            } else {
                currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            }
            updateCarrousel();
        });
    });

    updateCarrousel();
});
