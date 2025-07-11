export default function initOrbit () { 
    const orbitPhoto = document.querySelectorAll('[data-js-orbit-photo]')
    const orbitItem = '[data-js-orbit-item]' 
    const isActive = 'is-active'

    orbitPhoto.forEach(element => {
        element.addEventListener('click', onOrbitPhotoClick)
    })

    function onOrbitPhotoClick (event) {
        event.preventDefault()

        const currentOrbit = event.target.closest(orbitItem)
        const isActiveСondition = currentOrbit.classList.contains(isActive)
        
        if(isActiveСondition) {
            currentOrbit.classList.remove(isActive)
        } else {
        document.querySelectorAll(orbitItem).forEach(element => {
            element.classList.remove(isActive)
        })

            currentOrbit.classList.add(isActive)
        }
    }
}