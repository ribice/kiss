const 
    nameElement = document.getElementById('nav-name'),
    parentElement = document.getElementById('nav-main');

let incremented = 0;
function shiftNavIcons() {
    
    let headingElement = document.getElementById('nav-heading');
    if(nameElement.offsetWidth < (headingElement.offsetWidth+10)) {
        parentElement.classList.add('nav-shifted');
    } else {
        incremented++;
        if(incremented > 5 && parentElement.offsetWidth > 445) {
            parentElement.className = parentElement.className.replace(/\bnav-shifted\b/g, '');
            incremented = 0;
        }
        
    }
    
};
window.addEventListener('resize', (event) => {
    shiftNavIcons();
});
shiftNavIcons();