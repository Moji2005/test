let openList = document.querySelector('.icon-open__nav');

let icon1 = document.querySelector('#icon1');
let icon2 = document.querySelector('#icon2');
let open = document.querySelector('.box-items__nav');

openList.addEventListener('click', () => {
    if (icon1.className == 'block') {
        icon1.className = 'none';
        icon2.className = 'block';
        open.style.display = 'block';
    } else {
        icon1.className = 'block';
        icon2.className = 'none';
        open.style.display = 'none';


    }
});
