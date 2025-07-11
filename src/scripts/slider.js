export default function initSlider () {
    const slider = '[data-js-slider]'
    const track = '[data-js-slider-track]'
    const slide = '[data-js-slider-slide]'
    const strips = '[data-js-slider-strips]'

    const sliderElement = document.querySelector(slider)
    const trackElement = document.querySelector(track)
    const slideElements = document.querySelectorAll(slide)
    const stripsElement = document.querySelector(strips)
    const button = document.querySelector('.buttonB')
    const buttonM = document.querySelector('.buttonM')

    let currentSlideIndex = 0
    const paginationStrips = []
    const isActive = 'is-active'
    let x1 = null
    let y1 = null

    trackElement.addEventListener('touchstart', handleTouchStart, false)
    trackElement.addEventListener('touchmove', handleTouchMove, false)

    function handleTouchStart(event) {
        const firstTouch = event.touches[0]
        x1 = firstTouch.clientX
        y1 = firstTouch.clientY
        //console.log(x1, y1)
    }

    function handleTouchMove(event) {
        if(!x1 || !y1) {
            return false
        }
        let x2 = event.touches[0].clientX
        let y2 = event.touches[0].clientY
        //console.log(x2, y2)
        let xDiff = x2 - x1
        let yDiff = y2 - y1
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            //r - l
            if (xDiff > 0) console.log('rigth')
            else console.log('left')
        } else {
            //t - b
            if (yDiff > 0) console.log('top')
            else console.log('bottom')
        }
        x1 = null
        y1 = null
    }

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

    button.addEventListener('click', nextSlide)
    buttonM.addEventListener('click', lastSlide)
}
