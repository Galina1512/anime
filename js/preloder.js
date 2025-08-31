const preloader = () => {
    const preloader = document.querySelector('.preloder');
    setTimeout(() => {
        preloader.classList.remove('active');
    }, 800)
}
preloader();