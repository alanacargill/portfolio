document.addEventListener('DOMContentLoaded', function() {
    
    var toggle = document.querySelector('.toggle-btn');
    var mode = document.querySelector('.day-mode');
    var button = document.querySelectorAll('button');
    var footer = document.querySelector('footer');
    var input = document.querySelectorAll('input');
    var textArea = document.querySelector('textarea')

    toggle.addEventListener('click', function(){
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
    }, false); 
    
}, false);