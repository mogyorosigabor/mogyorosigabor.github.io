if (window.innerWidth < 768) {
    [].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(elem => {
        elem.classList.remove('animated');
        elem.removeAttribute('data-aos');
        elem.removeAttribute('data-bss-hover-animate');
        elem.removeAttribute('data-bss-parallax-bg');
        elem.removeAttribute('data-bss-scroll-zoom');
    });
}

document.addEventListener('DOMContentLoaded', _ => {
    // AOS initialization
    ('AOS' in window) && AOS.init();

    // Bootstrap tooltip initialization
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            trigger: "hover",
            customClass: "custom-tooltip"
        });
    });

    // Chart.js initialization
    const charts = document.querySelectorAll('[data-bss-chart]');

    for (let chart of charts) {
        chart.chart = new Chart(chart, JSON.parse(chart.dataset.bssChart));
    }
}, false);