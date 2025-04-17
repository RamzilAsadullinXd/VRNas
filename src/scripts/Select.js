const rootSelector = '[data-js-select]'

class Select {
    selectors = {
        root: rootSelector,
        list: '[data-js-select-list]',
        link: '[data-js-select-link]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor (rootElement) {
        this.rootElement = rootElement
        this.listElement = this.rootElement.querySelector(this.selectors.list)
        this.linksElements = this.rootElement.querySelectorAll(this.selectors.link)
        this.bindEvents()
    }

    onSelectorClick = (event) => {
        event.stopPropagation()

        document.querySelectorAll(this.selectors.root).forEach((element) => {
            const list = element.querySelector(this.selectors.list)

            if(element !== this.rootElement) {
                list.classList.remove(this.stateClasses.isActive)
            }
        })

        this.listElement.classList.toggle(this.stateClasses.isActive)
    }

    onSelectorClose = (event) => {
        if(!this.rootElement.contains(event.target)) {
            this.listElement.classList.remove(this.stateClasses.isActive)
        }
    }

    bindEvents() {
        this.rootElement.addEventListener('click', this.onSelectorClick)
        document.addEventListener('click', this.onSelectorClose)
    }
}

class SelectCollection {
    constructor () {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Select(element)
        })
    }
}

export default SelectCollection