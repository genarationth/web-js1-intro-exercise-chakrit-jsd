function ChangeName() {
    const text = 'What your name'
    const name = prompt(text)
    document.getElementById('inputName').innerText = 'Hello '+ name
}