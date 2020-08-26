document.addEventListener('DOMContentLoaded', function() {
    
    var switchButton = document.querySelector('.switch-button');
    var brushIcon = document.querySelector('.fa-brush');
    var switchBtnRight = document.querySelector('.switch-button-case.right');
    var switchBtnLeft = document.querySelector('.switch-button-case.left');
    var activeSwitch = document.querySelector('.active');
    var background = document.querySelector('.purple-background');
    var underlines = document.querySelectorAll('.blue-underline');

    function switchLeft(){
        switchBtnRight.classList.remove('active-case');
        switchBtnLeft.classList.add('active-case');
        activeSwitch.style.left = '0%';
    }

    function switchRight(){
        switchBtnRight.classList.add('active-case');
        switchBtnLeft.classList.remove('active-case');
        activeSwitch.style.left = '50%';
    }

    switchBtnLeft.addEventListener('click', function(){
        switchLeft();
        background.classList.add('purple-background');
        background.classList.remove('blue-background');
        underlines.forEach((underline) => {
            underline.classList.add('blue-underline');
            underline.classList.remove('purple-underline');
        });
    }, false);

    switchBtnRight.addEventListener('click', function(){
        switchRight();
        background.classList.add('blue-background');
        background.classList.remove('purple-background');
        underlines.forEach((underline) => {
            underline.classList.add('purple-underline');
            underline.classList.remove('blue-underline');
        });
    }, false); 
    
}, false);

