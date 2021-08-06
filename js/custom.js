const resizeSlide1 = () => {
    document.getElementById('slide1-thumbnail').style.height = `${window.innerHeight * 0.65}px`;
};

window.addEventListener('DOMContentLoaded', (event) => {
    resizeSlide1();

    window.addEventListener('resize', (event) => {
        resizeSlide1();
    });
});
