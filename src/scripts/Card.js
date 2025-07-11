const rootSelector = '[data-js-cards]'

class Cards {
    selectors = {
        root: rootSelector,
        card: '[data-js-cards-card]',
        cardButton: '[data-js-cards-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.cardElements = this.rootElement.querySelectorAll(this.selectors.card)
        this.cardButtonElements = this.rootElement.querySelectorAll(this.selectors.cardButton)

        this.bindEvents()
    }

    onCardButtonClick = (event) => {
        const button = event.currentTarget
        const card = button.closest(this.selectors.card)

        this.cardElements.forEach((card) => {
            card.classList.remove(this.stateClasses.isActive)
        })

        if (card) {
            card.classList.add(this.stateClasses.isActive)
        }
    }

    onDocumentClick = (event) => {
        if (!this.rootElement.contains(event.target)) {
            this.cardElements.forEach((card) => {
                card.classList.remove(this.stateClasses.isActive)
            })
        }
    }

    bindEvents() {
        this.cardButtonElements.forEach((button) => {
            button.addEventListener('click', this.onCardButtonClick)
        })

        document.addEventListener('click', this.onDocumentClick)
    }
}

class CardsCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Cards(element)
        })
    }
}

export default CardsCollection