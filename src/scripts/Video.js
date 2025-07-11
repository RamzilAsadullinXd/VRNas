const rootSelector = '[data-js-video]'
class Video {
    selectors = {
        root: rootSelector,
        videoPlayer: '[data-js-video-player]',
    }

    stateClasses = {
        isActive: 'is-active',
        isAnimating: 'is-animating',
    }

    constructor (rootElement) { 
        this.rootElement = rootElement
        this.videoPlayerElement = this.rootElement.querySelector(this.selectors.videoPlayer)
        this.bindEvents()
    }

    onVideoClick = () => {
        this.rootElement.classList.add(this.stateClasses.isAnimating)
        setTimeout(() => {
            this.rootElement.classList.add(this.stateClasses.isActive)
            this.videoPlayerElement.controls = true
            this.videoPlayerElement.play()
        }, 300)
    }

    onVideoClose = (event) => {
        event.preventDefault()

        if(!this.rootElement.contains(event.target)) {
            this.rootElement.classList.remove(this.stateClasses.isActive)
            this.videoPlayerElement.controls = false
            this.videoPlayerElement.pause()
            this.videoPlayerElement.currentTime = 0
            this.videoPlayerElement.load()
            setTimeout(() => {
                this.rootElement.classList.remove(this.stateClasses.isAnimating)
            }, 100)
        }
    }

    bindEvents() {
        this.rootElement.addEventListener('click', this.onVideoClick)
        document.addEventListener('click', this.onVideoClose)
    }
}

class VideoCollection {
    constructor () {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Video(element)
        })
    }
}

export default VideoCollection

