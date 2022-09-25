const slidesPlugin = (activeSlide) => {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClass();

            slide.classList.add('active');
        })
    }

    const clearActiveClass = () => {
        for (const slide of slides ) {
            slide.classList.remove('active');
        }
    };
}

slidesPlugin(0);