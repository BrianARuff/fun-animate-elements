const container = document.querySelector('.container');
const containerRect = container.getBoundingClientRect();

function createDotElement(color = '') {
    const elem = document.createElement('div');
    elem.classList.add('dot');
    if (color) elem.style.color = color;
    return elem;
}

function randomInsertionPoints() {

    const x = Math.round(Math.random() * containerRect.width - 8);

    const y = Math.round(Math.random() * containerRect.height - 8);

    return { x, y }
}

function animateDots() {
    const dots = Array.from(document.querySelectorAll('.dot'));

    dots.forEach((dot) => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const newX = Number(dot.style.left.replace('px', '')) + 1;
                dot.style.left = newX + 'px';
            }, 300);
        };

        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const newY = Number(dot.style.top.replace('px', '')) + 1;
                dot.style.top = newY + 'px';
            }, 300);
        }
    });
}

function initiateDotsMovement() {
    const animateDotsInterval = setInterval(() => {
        animateDots();
    }, 300);
    setTimeout(() => {
        clearInterval(animateDotsInterval)
    }, 100000);
}

function insertDotsInContainer() {
    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'black'];
    for (let i = 0; i < 10; i++) {
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        const dotColor = colors[randomColorIndex] ? colors[randomColorIndex] : 'red';
        const { x, y } = randomInsertionPoints();
        const dot = createDotElement(dotColor);
        dot.style.top = y + 'px';
        dot.style.left = x + 'px';
        container.appendChild(dot);
    }
}

function startApp() {
    insertDotsInContainer();
    initiateDotsMovement();
}

window.addEventListener('DOMContentLoaded', startApp);