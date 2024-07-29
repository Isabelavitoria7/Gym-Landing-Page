document.addEventListener('DOMContentLoaded', function() {
    const plans = document.querySelectorAll('.plan');
    const balls = document.querySelectorAll('.ball');
    let currentIndex = 0;

    function updateCarousel(index) {
        document.querySelector('.container-plans').scrollLeft = plans[index].offsetLeft;
        balls.forEach((ball, idx) => {
            ball.classList.toggle('active-ball', idx === index);
        });

        plans.forEach((plan, idx) => {
            if (idx === index && !plan.classList.contains('premium')) {
                plan.classList.add('selected-no-premium');
                plan.classList.toggle('selected-plan', idx === index);
            } else {
                plan.classList.remove('selected-no-premium');
                plan.classList.toggle('selected-plan', idx === index);
            }
        });
    }

    balls.forEach((ball, index) => {
        ball.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    plans.forEach((plan, index) => {
        plan.addEventListener('click', ()=> {
            currentIndex = index;
            updateCarousel(currentIndex)
        });
    });

});
