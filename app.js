const button = document.getElementById('counterButton')
const container = document.getElementById('container')

let counter = 0

container.innerText = `Число кликов ${counter}`

button.addEventListener('click',() => {
    counter++;
    console.log(counter)
})