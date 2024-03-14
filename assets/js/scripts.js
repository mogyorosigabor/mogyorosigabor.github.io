document.addEventListener('DOMContentLoaded', function () {
    ['load', 'scroll'].forEach((e) => window.addEventListener(e, function () {
        /* scroll top button hide/show */
        document.getElementsByClassName('scroll-top')[0].style.right = (this.scrollY > 0) ? '20px' : '-70px';
        /* scroll indicator */
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.getElementById('scrollIndicatorBar').style.width = scrolled + '%';
    }, false));
    /* scroll to top */
    document.querySelector('.scroll-top').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return false;
    });
    /* Click nav-link collapse navbar */
    document.querySelectorAll('.navbar .nav-item .nav-link').forEach(el => el.addEventListener('click', function () {
        document.getElementById('navcol-5').classList.remove('show');
    }));
    var navbarHeight = document.querySelector('.navbar')?.offsetHeight;
    Array.from(document.querySelectorAll('a[href*="#"]')).forEach((link) => {
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