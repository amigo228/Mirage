var btn = document.querySelector('.btn-brg-holder');
var header = document.querySelector('.header');
btn.addEventListener('click', function () {
    var w = window.innerWidth;
    if (!header.classList.contains('active') && w <= 1024) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
});
