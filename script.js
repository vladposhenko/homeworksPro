const root = document.querySelector('.root')


const setLevel= (level, element) => {
    level--;
    if(element.children && level > 0) {
        let children = [...element.children]
        children.forEach(child => setLevel(level, child))
    } else {
        if(element.children.length) {
            setTimeout(() => {
                element.children[0].classList.add('firstItem')
                element.children[element.children.length - 1].classList.add('lastItem')
            }, 2000);
        }
    }
}

setLevel(1 , root)
