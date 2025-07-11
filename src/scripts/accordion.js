export default function initAccordion () {
    const root = '[data-js-accordion]'
    const headerAccordion = '[data-js-accordion-header]'
    const contentAccordion = '[data-js-accordion-content]'

    const headerAccordionElements = document.querySelectorAll(headerAccordion)
    const contentAccordionElements = document.querySelectorAll(contentAccordion)

    const isActive = 'is-active'

    const accordionItem = Array.from(headerAccordionElements)

    accordionItem.forEach((accordion) => {
        accordion.addEventListener('click', accordionHandler)
    })

    function accordionHandler(event) {
        event.preventDefault()

        let currentAccordion = event.target.closest(root)
        let currentContent = currentAccordion.querySelector(contentAccordion)
        const isActiveAccordion = currentAccordion.classList.contains(isActive) 
        
        if(isActiveAccordion) {
            currentAccordion.classList.remove(isActive)
            currentContent.style.maxHeight = 0
        } else {
        document.querySelectorAll(root).forEach(element => {
            element.classList.remove(isActive)
            contentAccordionElements.forEach(item => {
                item.style.maxHeight = 0
            });
        })
        currentAccordion.classList.add(isActive)
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
        }
    }
}