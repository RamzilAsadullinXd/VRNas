export default function initSlider () {
    const slider = '[data-js-slider]'
    const track = '[data-js-slider-track]'
    const slide = '[data-js-slider-slide]'
    const strips = '[data-js-slider-strips]'
    const buttonRight = '[data-js-cards-button-right]'
    const buttonLeft = '[data-js-cards-button-left]'

    const sliderElement = document.querySelector(slider)
    const trackElement = document.querySelector(track)
    const slideElements = document.querySelectorAll(slide)
    const stripsElement = document.querySelector(strips)
    const buttonRightElement = document.querySelector(buttonRight)
    const buttonLeftElement = document.querySelector(buttonLeft)

    let currentSlideIndex = 0
    const paginationStrips = []
    const isActive = 'is-active'

    function createPaginationStrip() {
        const divElement = document.createElement('div')
        divElement.className = 'slider__strips-strip'
        stripsElement.appendChild(divElement)
        paginationStrips.push(divElement)
    }

    function addPagination() {
        slideElements.forEach(createPaginationStrip)
        paginationStrips[0].classList.add(isActive)
    }

    function addActiveClass() {
        paginationStrips[currentSlideIndex].classList.add(isActive)
    }
    
    function deleteActiveClass() {
        paginationStrips[currentSlideIndex].classList.remove(isActive)
    }

    function showSlide () {
        trackElement.style.transform = `translateX(-${currentSlideIndex * 100}%)`
    }

    function nextSlide () {
        deleteActiveClass()
        currentSlideIndex ++
        if(currentSlideIndex > slideElements.length - 1) {
            currentSlideIndex = 0
        }
        addActiveClass()
        showSlide()
    }

    function lastSlide () {
        deleteActiveClass()
        currentSlideIndex --
        if(currentSlideIndex < 0) {
            currentSlideIndex = slideElements.length - 1
        }
        addActiveClass()
        showSlide()
    }
    addPagination()

    buttonLeftElement.addEventListener('click', nextSlide)
    buttonRightElement.addEventListener('click', lastSlide)
}
