import './style.css';

function createInterface() {
    const box = document.createElement('div')
    const headerText = document.createElement('div')
    const projectInterface = document.createElement('div')
    const topInterface = document.createElement('div')
    const homeInterface = document.createElement('li')
    const todayInterface = document.createElement('li')
    const weekInterface = document.createElement('li')
    const importantInterface = document.createElement('li')
    const project = document.createElement('div')
    const plusButton = document.createElement('div')
    const tasks = document.createElement('div')
    const bottomInterface = document.createElement('div')
    const modal = document.createElement('div')
    const modalContent = document.createElement('div')
    const buttons = document.createElement('div')
    const closeButton = document.createElement('span')
    const addButton = document.createElement('button')


    headerText.classList.add('flex')
    projectInterface.classList.add('grid')
    topInterface.classList.add('top')
    bottomInterface.classList.add('bottom')
    plusButton.classList.add('projectplus')
    project.classList.add('project')
    tasks.classList.add('tasks')
    modal.classList.add('modal')
    modalContent.classList.add('modal-content')
    buttons.classList.add('buttons')
    closeButton.classList.add('close')
    


    headerText.textContent = ['Taskit'];
    homeInterface.textContent = ['Home']
    todayInterface.textContent = ['Today']
    weekInterface.textContent = ['This Week']
    importantInterface.textContent = ['Important']
    project.textContent = ['Projects']
    plusButton.textContent = ["+"]
    tasks.textContent = ['All Tasks']
    modalContent.textContent = ['Add New Project']
    addButton.textContent = ['Submit']
    closeButton.textContent = ['X']

    plusButton.addEventListener('click', function() {
        modal.style.display = 'block'
        modalContent.style.display = 'block'
        console.log('apple')
    })

    closeButton.addEventListener('click', function(){
        modal.style.display = 'none'
        modalContent.style.display = 'none'
        console.log('banana')
    })


    topInterface.appendChild(homeInterface)
    topInterface.appendChild(todayInterface)
    topInterface.appendChild(weekInterface)
    topInterface.appendChild(importantInterface)

    projectInterface.appendChild(topInterface)
    projectInterface.appendChild(bottomInterface)

 
    project.appendChild(modal)
    modal.appendChild(modalContent)
    bottomInterface.appendChild(project)
    project.appendChild(plusButton)
    bottomInterface.appendChild(tasks)
    modalContent.appendChild(closeButton)
    modalContent.appendChild(buttons)
    buttons.appendChild(addButton)


    box.appendChild(headerText)
    box.appendChild(projectInterface)
    
    return box;
}

document.getElementById('container').appendChild(createInterface());


const myProjects = [];
const myTodos = [];

function storeProject() {
    let newProject = new Project()
    myProjects.push(newProject)
}

class Project {
    constructor(title) {
        this.title = title;
    }
}


class Todo {
    constructor(title, description, dueDate, priority, notes, checkList){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkList = checkList
    }
}