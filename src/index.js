import './style.css';

function createInterface() {
    const box = document.createElement('div')
    const headerText = document.createElement('div')
    const projectInterface = document.createElement('div')
    const homeInterface = document.createElement('li')
    const todayInterface = document.createElement('li')
    const weekInterface = document.createElement('li')
    const importantInterface = document.createElement('li')

    headerText.classList.add('flex')
    projectInterface.classList.add('grid')


    headerText.textContent = ['Taskit'];
    homeInterface.textContent = ['Home']
    todayInterface.textContent = ['Today']
    weekInterface.textContent = ['This Week']
    importantInterface.textContent = ['Important']

    box.appendChild(headerText)
    box.appendChild(projectInterface)
    projectInterface.appendChild(homeInterface)
    projectInterface.appendChild(todayInterface)
    projectInterface.appendChild(weekInterface)
    projectInterface.appendChild(importantInterface)


    return box;
}

document.getElementById('container').appendChild(createInterface());
