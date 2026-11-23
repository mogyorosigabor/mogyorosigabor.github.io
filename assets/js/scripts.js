document.addEventListener('DOMContentLoaded', function () {
    /* scroll to top */
    document.querySelector('.scroll-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return false;
    });
    /* Click nav-link collapse navbar */
    document.querySelectorAll('.navbar .nav-item .nav-link').forEach(el => {
        el.addEventListener('click', function () {
            document.getElementById('navcol-5').classList.remove('show');
        });
    });
    let navbarHeight = document.querySelector('.navbar')?.offsetHeight;
    Array.from(document.querySelectorAll('a[href*="#"]')).forEach(link => {
        link.addEventListener('click', function () {
            window.scrollTo({
                top: document.querySelector(this.hash).offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
    document.getElementById('accordion')?.addEventListener('show.bs.collapse', function (e) {
        this.querySelectorAll('.accordion-button[disabled]').forEach(button => button.disabled = false);
        e.target.closest('.accordion-item')?.querySelector('.accordion-button')?.setAttribute('disabled', true);
    });
});

/* Hashtag remover */
function removeLocationHash() {
    let noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL);
}

['popstate', 'hashchange', 'load'].forEach((e) => window.addEventListener(e, removeLocationHash, false));

Fancybox.bind("[data-fancybox]");