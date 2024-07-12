document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-cards');
    const chevrons = document.querySelectorAll('.chevron-f');
    const totalItems = document.querySelectorAll('.card').length/2;
    const balls = document.querySelectorAll('.feedback-ball')
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-(currentIndex * 100)}%)`;
        updateBall();
    }

    function updateBall(){
        balls.forEach(ball => ball.classList.remove('active-ball'));
        balls[currentIndex].classList.add('active-ball');
    }

    chevrons.forEach(chevron => {
        chevron.addEventListener('click', function() {
            if (chevron.classList.contains('bi-chevron-left')) {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            } else {
                currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            }

            updateCarousel();
        });
    });

    updateCarousel();
});
