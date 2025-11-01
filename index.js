window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollHeight = window.scrollY;
    console.log(scrollHeight);
    if (scrollHeight >= window.innerHeight) {
        header.style.visibility = 'visible';
    } else {
        header.style.visibility = 'hidden';
    }
});
