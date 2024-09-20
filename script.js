'use strict';
/* api integration */
const base_url = 'https://weatherwidget.io/js/widget.min.js';

!function createWidget(document, str, id) {
    var js, fjs = document.getElementsByTagName(str)[0];
    if (!document.getElementById(id)) {
        js = document.createElement(str); 
        js.id = id; 
        js.src = base_url;
        fjs.parentNode.insertBefore(js, fjs);}
    }(document, 'script', 'weatherwidget-io-js');

async function getWeather() {
    try {
        const response = await fetch(base_url);
        if (!response.ok) {
            throw Error(`Error: ${response.url} ${response.statusText}`);
        }
        const data = await response.json();
    } catch (error) {
        showError(error.message);
    }
} 

/* UI Component 1- Accordion to author page */
const root = document.documentElement;

function buttonClick(e) {
    let btn = e.target;
    btn.classList.toggle('open');
    if (btn.nextElementSibling){
        btn.nextElementSibling.classList.toggle('open');
        root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');
    }
    let buttons = document.getElementsByClassName('aboutdesigner');
    for (let i = 0; i < buttons; i++) {
        if (buttons[i] != btn && buttons[i].classList.contains('open')) {
            buttons[i].classList.remove('open');
            if (buttons[i].nextElementSibling) {
                buttons[i].nextElementSibling.classList.remove('open');
            }
        }
    }
    
}

document.getElementsByClassName('aboutdesigner')[0].addEventListener("click", buttonClick);

/* UI Component 3 - dialog box pop-up when submitting form in teetime page*/

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}