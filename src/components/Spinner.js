export function Spinner() {
    const loader = document.createElement('div')
    loader.className = 'spinner-container'
    loader.innerHTML = `<div class="lds-dual-ring"></div>`
    return loader
}