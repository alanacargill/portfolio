document.addEventListener('DOMContentLoaded', function() {

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const toggle = document.querySelector('.toggle-btn');
    const mode = document.querySelector('.day-mode');
    const button = document.querySelectorAll('button');
    const footer = document.querySelector('footer');
    const input = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea')
    const toggleCheckbox = document.getElementById('_1st-toggle-btn').getElementsByTagName('input')[0];

    let isDark = getParameterByName('darkMode') === 'true'

    if (isDark) {
        toggleCheckbox.checked = true;
        toggleNightMode();
    }

    toggle.addEventListener('click', function(){
        isDark = !isDark;
        toggleNightMode();
    }, false); 

    function toggleNightMode() {
        $(mode).toggleClass('day-mode');
        $(mode).toggleClass('night-mode');
        $(button).toggleClass('button-day-mode');
        $(button).toggleClass('button-night-mode');
        $(footer).toggleClass('footer-day-mode');
        $(footer).toggleClass('footer-night-mode');
        $(input).toggleClass('input-day-mode');
        $(input).toggleClass('input-night-mode');
        $(textArea).toggleClass('textarea-day-mode');
        $(textArea).toggleClass('textarea-night-mode');
    }

    for(var i = 0, anchors = document.getElementsByTagName("a"); i < anchors.length; ++i) {
        anchors[i].addEventListener('click', function(e) {
            if (e.target.href.startsWith('https://www.alanacargill.co.uk')) {
                e.preventDefault();
                window.location.href = e.target.href + "?darkMode=" + isDark;
            }
        });
    }
    
}, false);