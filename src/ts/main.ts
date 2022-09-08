const btn = document.querySelector('.btn-brg-holder');
const header = document.querySelector('.header');

btn.addEventListener('click', () => {
    const w: number = window.innerWidth;
    if(!header.classList.contains('active') && w <= 1024) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
})



