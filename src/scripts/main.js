import '../style/style.scss'

import Header from './Header'
import SelectCollection from './Select'
import VideoCollection from './Video'
import CardsCollection from './Card'
import initAccordion from './accordion'
import initOrbit from './orbit'
import initSlider from './slider'

new Header()
new SelectCollection()
new VideoCollection()
new CardsCollection()
document.addEventListener('DOMContentLoaded', () => {
    initAccordion()
    initOrbit()
    initSlider()
})
