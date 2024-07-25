window.addEventListener('scroll', function() {
    const mel = document.querySelector('.mel');
    let scrollPosition = window.pageYOffset;
    mel.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
