const button = document.getElementById('counterButton')
const container = document.getElementById('container')

let counter = 42

container.innerText = `Число клюкв ${counter}`

button.addEventListener('click',() => {
    counter += 2;
    console.log(counter)
    console.log(counter)
    counter = counter - 2
})