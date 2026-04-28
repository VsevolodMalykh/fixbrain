const button = document.getElementById('counterButton')
const container = document.getElementById('container')

let counter = 0

container.innerText = `Число клюкв ${counter}`

button.addEventListener('click',() => {
    counter++;
    console.log(counter)
    console.log(counter)
    counter = counter - 2
})