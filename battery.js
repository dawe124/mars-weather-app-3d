let changingStatus = document.querySelectorAll('.charging-status')[0]
let chargingBar = document.querySelectorAll('.charging-bar')[0]
let chargingLevel = document.querySelectorAll('.charging-level')[0]

navigator.getBattery().then(battery => {
    console.log(battery)
    if (battery.charging) {
        changingStatus.innerHTML = `<img src="./imgs/lighting.svg">`
    } else {
        changingStatus.innerHTML = `<img src="./imgs/lighting.svg">`
    }
    chargingBar.style.width = `${battery.level * 200}px`
    chargingLevel.innerHTML = `${battery.level * 100}%`
    console.log(chargingLevel)
    console.log('battery level: ' + battery.level)
    if (battery.level > 0.7) {
        chargingBar.style.background = `rgba(60, 242, 70, 0.8)`
    } else if (battery.level > 0.3) {
        chargingBar.style.background = 'yellow'
    } else {
        chargingBar.style.background = 'red'
    }

    if (battery.charging) {
        changingStatus.children[0].style.filter = `invert(99%) sepia(33%) saturate(5505%) hue-rotate(51deg) brightness(98%) contrast(93%)`
    } else if (!battery.charging) {
        changingStatus.children[0].style.filter = `invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)`

    }
    console.log(battery.charging)
    console.log(battery.level * 100)
})