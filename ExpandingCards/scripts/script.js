const panels = document.querySelectorAll('.panel')

function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActive()
        panel.classList.add('active')
    })
})