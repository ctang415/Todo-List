import './style.css';
import Expand from './expand.png'
import Edit from './edit.png'
import Trash from './trash.png'
import Star from './star.png'


function createInterface() {
    const box = document.createElement('div')
    const headerText = document.createElement('div')
    const projectInterface = document.createElement('div')
    const topInterface = document.createElement('div')
    const homeInterface = document.createElement('li')
    const todayInterface = document.createElement('li')
    const weekInterface = document.createElement('li')
    const importantInterface = document.createElement('li')
    const projectPlus = document.createElement('div')
    const projectList = document.createElement('div')
    const leftSide = document.createElement('div')
    const rightSide = document.createElement('div')
    const project = document.createElement('div')
    const plusButton = document.createElement('div')
    const header = document.createElement('div')
    const addTask = document.createElement('button')
    const tasks = document.createElement('div')
    const bottomInterface = document.createElement('div')
    const modal = document.createElement('div')
    const modalContent = document.createElement('div')
    const modalTask = document.createElement('div')
    const modalTaskContent = document.createElement('div')
    const inputTitle = document.createElement('input')
    const input = document.createElement('div')
    const closeButton = document.createElement('span')
    const addButton = document.createElement('button')
    const form = document.createElement('form')
    const titleTask = document.createElement('label')
    const titleTaskInput = document.createElement('input')
    const descriptionTask = document.createElement('label')
    const descriptionTaskInput = document.createElement('input')
    const priorityTask = document.createElement('label')
    const taskDiv = document.createElement('div')
    const dateTask = document.createElement('label')
    const dateTaskInput = document.createElement('input')

    dateTaskInput.type = 'date'
    inputTitle.id = 'inputid'


 
    headerText.classList.add('flex')
    projectInterface.classList.add('grid')
    topInterface.classList.add('top')
    bottomInterface.classList.add('bottom')
    plusButton.classList.add('projectplus')
    leftSide.classList.add('project')
    tasks.classList.add('tasks')
    modal.classList.add('modal')
    modalContent.classList.add('modal-content')
    input.classList.add('buttons')
    closeButton.classList.add('close')
    addButton.classList.add('add')
    inputTitle.classList.add('inputTitle')
    projectList.classList.add('stretch')
    addTask.classList.add('addTask')
    modalTask.classList.add('modal')
    modalTaskContent.classList.add('modalTask')
    form.classList.add('taskDiv')
    titleTaskInput.classList.add('taskInputs')
    descriptionTaskInput.classList.add('taskInputs')





    projectPlus.setAttribute('style', 'display: flex', 'flex-direction: row')



    headerText.textContent = ['Taskit'];
    homeInterface.textContent = ['Home']
    todayInterface.textContent = ['Today']
    weekInterface.textContent = ['This Week']
    importantInterface.textContent = ['Important']
    project.textContent = ['Projects']
    plusButton.textContent = ["+"]
    modalContent.textContent = ['Add New Project']
    addButton.textContent = ['Submit']
    closeButton.textContent = ['X']
    addTask.textContent = ['add task']
    titleTask.textContent = ['Title:']
    descriptionTask.textContent = ['Notes:']
    priorityTask.textContent = ['Priority:']
    dateTask.textContent = ['Due Date: ']




    plusButton.addEventListener('click', function() {
        modal.style.display = 'block'
        modalContent.style.display = 'block'
    })

    closeButton.addEventListener('click', function(){
        modal.style.display = 'none'
        modalContent.style.display = 'none'
    })

    addButton.addEventListener('click', function() {
        if(inputid.value === '')
        {
            inputid.value = 'untitled'
            storeProject()
            displayProject();
            modal.style.display = 'none'
            modalContent.style.display = 'none'
            inputid.value = ''
        }
        else if (inputid.value != '') {
        console.log(myProjects)
        storeProject()
        displayProject();
        modal.style.display = 'none'
        modalContent.style.display = 'none'
        inputid.value = ''
        }
    })


    function displayProject() {
        const projectDiv = document.createElement('div')
        const projectDivArea = document.createElement('div')
        projectDivArea.setAttribute('style', 'cursor: pointer')
        projectDivArea.classList.add('projectDivArea')

        projectDivArea.addEventListener('click', function() {
            header.textContent = projectDiv.textContent
            header.classList.add('header')
            header.appendChild(addTask)
        })

        const projectIcons = document.createElement('div')
        const myTrash = new Image()
        myTrash.classList.add('imageOther')
        myTrash.src = Trash


        myTrash.addEventListener('click', function() {
            projectList.removeChild(projectDiv)
            header.textContent = ' '
        })

        projectDivArea.textContent = inputid.value
        projectDiv.classList.add('projectDiv')
        projectIcons.classList.add('icons')
        projectIcons.appendChild(myTrash)
        projectDiv.appendChild(projectDivArea)
        projectDiv.appendChild(projectIcons)
        projectList.appendChild(projectDiv)
    }

    addTask.addEventListener('click', function() {
        modalTask.style.display = 'block'
        modalTaskContent.style.display = 'block'
    })

    let closeClone = closeButton.cloneNode(true)


    closeClone.addEventListener('click', function() {
        modalTask.style.display = 'none'
        modalTaskContent.style.display = 'none'
    })

    let addClone = addButton.cloneNode(true)

    addClone.type = 'submit'

    addClone.addEventListener('click', function() {
        console.log('banana')
    })

    function createRadio() {
    var radio = ['Low', 'Medium', 'High']
    radio.forEach((value, index) =>{
    var label = document.createElement('label')
    label.setAttribute('style', 'padding: 10px')
    label.textContent = value
    var input = document.createElement('input')
    input.setAttribute('style', 'padding: 10px')
    input.type = 'radio'
    input.value = index
    input.name = "priority"
    priorityTask.appendChild(input)
    priorityTask.appendChild(label)
    })
    }
    createRadio();
    


    topInterface.appendChild(homeInterface)
    topInterface.appendChild(todayInterface)
    topInterface.appendChild(weekInterface)
    topInterface.appendChild(importantInterface)

    projectInterface.appendChild(topInterface)
    projectInterface.appendChild(bottomInterface)

    bottomInterface.appendChild(leftSide)

    leftSide.appendChild(projectPlus)
    leftSide.appendChild(projectList)

    projectPlus.appendChild(project)
    projectPlus.appendChild(plusButton)
    
    rightSide.appendChild(header)

    project.appendChild(modal)
    modal.appendChild(modalContent)
    bottomInterface.appendChild(rightSide)
    rightSide.appendChild(tasks)
    input.appendChild(inputTitle)
    input.appendChild(addButton)
    modalContent.appendChild(closeButton)
    modalContent.appendChild(input)

    modalTask.appendChild(modalTaskContent)
    rightSide.appendChild(modalTask)
    
    modalTaskContent.appendChild(closeClone)
    form.appendChild(titleTask)
    form.appendChild(titleTaskInput)
    form.appendChild(descriptionTask)
    form.appendChild(descriptionTaskInput)
    form.appendChild(priorityTask)
    form.appendChild(dateTask)
    dateTask.appendChild(dateTaskInput)
    taskDiv.appendChild(form)
    
    modalTaskContent.appendChild(taskDiv)
    form.appendChild(addClone)

    box.appendChild(headerText)
    box.appendChild(projectInterface)
    
    return box;
}

document.getElementById('container').appendChild(createInterface());


let myProjects = [];
let myTodos = [];



class Project {
    constructor(title) {
        this.title = title;
        this.tasks = []
    }
    addTasksToDom() {

    }
}


class Todo {
    constructor(title, description, priority, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function storeProject() {
    let newProject = new Project(inputid.value)
    myProjects.push(newProject)
}



