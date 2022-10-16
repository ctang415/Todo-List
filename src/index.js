import './style.css';

function createInterface() {
    const box = document.createElement('div')
    const headerText = document.createElement('div')

    box.classList.add('flex')

    headerText.textContent = ['Taskit'];

    box.appendChild(headerText)

    return box;
}

document.getElementById('container').appendChild(createInterface());
