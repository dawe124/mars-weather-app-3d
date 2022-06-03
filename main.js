import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';
const zoomLevel = document.getElementById('zoom-level')

let scene
let camera
// let renderer

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000)
    camera.position.set(-900, -200, -900)

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: document.querySelector('canvas')
    })
    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setPixelRatio(devicePixelRatio)

    let controls = new OrbitControls(camera, renderer.domElement)
    // controls.addEventListener('change', renderer)
    controls.minDistance = 500
    controls.maxDistance = 2500

    let materialArray = []
    let texture_ft = new THREE.TextureLoader().load('./imgs/torture_ft.jpg')
    let texture_bk = new THREE.TextureLoader().load('./imgs/torture_bk.jpg')
    let texture_up = new THREE.TextureLoader().load('./imgs/torture_up.jpg')
    let texture_dn = new THREE.TextureLoader().load('./imgs/torture_dn.jpg')
    let texture_rt = new THREE.TextureLoader().load('./imgs/torture_rt.jpg')
    let texture_lf = new THREE.TextureLoader().load('./imgs/torture_lf.jpg')

    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }))

    for (let i = 0; i < 6; i++) {
        materialArray[i].side = THREE.BackSide
    }

    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000)
    let skybox = new THREE.Mesh(skyboxGeo, materialArray)
    scene.add(skybox)

    // animate()


new OrbitControls(camera, renderer.domElement)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()

let currentZoom = parseInt(Math.abs(parseInt(controls.getDistance() / 10) - 263) / 2.16)
zoomLevel.style.width = `${currentZoom}px`

document.addEventListener('wheel', () => {
    currentZoom = parseInt(Math.abs(parseInt(controls.getDistance() / 10) - 263) / 2.16)
    // zoomLevel.innerHTML = `${currentZoom}`
    zoomLevel.style.width = `${currentZoom}px`
})