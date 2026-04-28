const button = document.getElementById('counterButton')
const container = document.getElementById('container')

let counter = 1

container.innerText = `Число кликов ${counter}`

button.addEventListener('click',() => {
    counter += 2;
    console.log(counter)
})