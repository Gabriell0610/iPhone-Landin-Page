const img = document.getElementById('img')
const buttons = document.getElementById('buttons')


const changeColor = (event) => {
    change[event.target.id]();
}


const change = {
    "green": () => img.src = './img/green.png',
    "pink":  () => img.src = './img/pink.png',
    "blue":  () => img.src = './img/blue.png',
    "black": () => img.src = './img/black.png',
    "white": () => img.src = './img/white.png',
    "red":   () => img.src = './img/red.png',
}

function changeCircle(color){
    const circle = document.getElementById('circle')
    circle.style.background = color;
}


buttons.addEventListener('click', changeColor)