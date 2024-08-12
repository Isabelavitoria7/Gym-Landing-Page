document.addEventListener('DOMContentLoaded', function() {
    const plans = document.querySelectorAll('.plan');
    const balls = document.querySelectorAll('.ball');
    const containerPlans = document.querySelector('.container-plans');
    let currentIndex = 0;

    function updateCarousel(index) {
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
    
    function getClosestPlanIndex() {
        let closestIndex = 0;
        let closestDistance = Infinity;
    
        plans.forEach((plan, index) => {
            const planCenter = plan.offsetLeft + plan.offsetWidth / 2;
            const containerCenter = containerPlans.scrollLeft + containerPlans.offsetWidth / 2;
            const distance = Math.abs(planCenter - containerCenter);
    
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
    
        return closestIndex;
    }
    
    containerPlans.addEventListener('scroll', () => {
        const newIndex = getClosestPlanIndex();
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateCarousel(currentIndex);
        }
    });
    
    balls.forEach((ball, index) => {
        ball.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
            containerPlans.scrollTo({
                left: plans[currentIndex].offsetLeft - (containerPlans.offsetWidth / 2) + (plans[currentIndex].offsetWidth / 2),
                behavior: 'smooth'
            });
        });
    });
    
    plans.forEach((plan, index) => {
        plan.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
            containerPlans.scrollTo({
                left: plans[currentIndex].offsetLeft - (containerPlans.offsetWidth / 2) + (plans[currentIndex].offsetWidth / 2),
                behavior: 'smooth'
            });
        });
    });

    
    
    function setInitialPosition() {
        const planWidth = containerPlans.clientWidth;
        const middlePlanIndex = 1; // Índice do plano do meio
    
        // Calcula a posição de scroll necessária para centralizar o plano do meio
        const scrollPosition = middlePlanIndex * planWidth;
        containerPlans.scrollLeft = scrollPosition;
    }
    
    // Chama a função para definir a posição inicial quando a página carrega
    window.addEventListener('load', setInitialPosition);
});
