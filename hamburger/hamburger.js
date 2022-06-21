// Создать компонент гамбургер меню.
// На десктопе у нас должны в линию (горизонтально) отображаться пункты меню.
// В мобильной версии это должен быть значек с тремя черточками, 
// при нажатии на который, выпадает список с пунктами меню. 
// При клике на какой-либо пункт, меню должно сворачиваться.

// *****************************************************

class Hamburger {
    #nav_menu = [];
    #hamburger = [];
    static CLASSES = {
        active: 'active',
        show: 'show',
    };

    constructor(el) {
        this.init(el);
    }

    init(el) {
        this.setElements(el);
        el.addEventListener('click', this.onClick);
    }

    setElements(el) {
        this.#nav_menu = el.children[0];
        // console.log('nav-menu', this.#nav_menu);

        this.#hamburger = el.children[1];
        // console.log('hamburger', this.#hamburger);
    }

    onClick = e => {
        // console.log(e.target);

        if (e.target.classList.contains('hamb')) {
            setActiveClasses(this.#nav_menu, Hamburger.CLASSES.show);
            setActiveClasses(this.#hamburger, Hamburger.CLASSES.active);

        } else if (e.target.classList.contains('nav')) {
            setActiveClasses(this.#nav_menu, Hamburger.CLASSES.show);
            setActiveClasses(this.#hamburger, Hamburger.CLASSES.active);
        } 
    
        function setActiveClasses(element, activeClass) {
            element.classList.toggle(activeClass);
        }
    }
}