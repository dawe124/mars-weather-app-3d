let controllerBtns = document.querySelectorAll('.hud-toggle')

controllerBtns.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.dataset.id)
        
        if (e.target.innerHTML == "ON") {
            e.target.innerHTML = "OFF"
            e.target.style.color = 'red'
        } else {
            e.target.innerHTML = "ON"
            e.target.style.color = 'rgba(60, 242, 70, 0.8)'
        }
        let toggleItem = document.getElementById(e.target.dataset.id)
        console.log(toggleItem)
        if (e.target.dataset.id == "logo" || e.target.dataset.id == "weather") {
            toggleItem.style.animation = 'weather-out 2s forwards'
        } else if (e.target.dataset.id == "battery") {
            toggleItem.style.animation = 'battery-out 2s forwards'
        } else {
            toggleItem.style.animation = 'camera-out 2s forwards'
        }

        setTimeout(() => {
            toggleItem.style.animation = null
            toggleItem.classList.toggle('active')
            // toggleItem.style.animation = none
        }, 1000);
    })
});
