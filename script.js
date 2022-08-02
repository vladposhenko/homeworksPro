const select = document.querySelector('#selectFigure');
const figure = document.querySelector('#figura')
const color = document.querySelector('#input')

getFigure('Квадрат')

function getFigure (option) {
    switch (option) {
        case 'Круг':
            figure.classList.add('circle')
            break;
        case 'Квадрат':
            figure.classList.add('square')
            break;
        case 'Прямоугольник':
            figure.classList.add('rectangle')
            break;
        default:
            break;
    }
}



select.addEventListener('change',  () => {
    figure.classList = ''
    getFigure(select.value)
})

color.addEventListener('change', () => { figure.style.backgroundColor = color.value })