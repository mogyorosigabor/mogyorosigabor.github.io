if (window.innerWidth < 768) {
    [].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
        elem.classList.remove('animated');
        elem.removeAttribute('data-bss-hover-animate');
        elem.removeAttribute('data-aos');
        elem.removeAttribute('data-bss-parallax-bg');
        elem.removeAttribute('data-bss-scroll-zoom');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // AOS initialization
    ('AOS' in window) && AOS.init();

    // Bootstrap tooltop initialization
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            trigger: "hover",
            customClass: "custom-tooltip"
        });
    });

    // Chart.js initialization
    var charts = document.querySelectorAll('[data-bss-chart]');

    for (var chart of charts) {
        chart.chart = new Chart(chart, JSON.parse(chart.dataset.bssChart));
    }
}, false);