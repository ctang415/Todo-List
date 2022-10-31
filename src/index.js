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
    const addTaskButton = document.createElement('button')
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
    const taskDiv = document.createElement('div')
    const form = document.getElementById('form')
    const titleTask = document.getElementById('labelTitle')
    const titleTaskInput = document.getElementById('title')
    const descriptionTask = document.getElementById('labelNotes')
    const descriptionTaskInput = document.getElementById('description')
    const priorityTask = document.getElementById('labelPriority')
    const lowLabel = document.getElementById('lowLabel')
    const low = document.getElementById('low')
    const mediumLabel = document.getElementById('mediumLabel')
    const medium = document.getElementById('medium')
    const highLabel = document.getElementById('highLabel')
    const high = document.getElementById('high')
    const dateTask = document.getElementById('labelDate')
    const dateTaskInput = document.getElementById('date')
    const submitButton = document.getElementById('submitButton')



    inputTitle.id = 'inputid'
    inputTitle.maxLength = 35
    dateTaskInput.value = new Date().toLocaleDateString('en-CA')


 
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
    addTaskButton.classList.add('addTask')
    modalTask.classList.add('modal')
    modalTaskContent.classList.add('modalTask')
    form.classList.add('taskDiv')
    titleTaskInput.classList.add('taskInputs')
    descriptionTaskInput.classList.add('taskInputs')
    projectPlus.setAttribute('style', 'display: flex')




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
    addTaskButton.textContent = ['add task']
 




    plusButton.addEventListener('click', function() {
        modal.style.display = 'block'
        modalContent.style.display = 'block'
    })

    closeButton.addEventListener('click', function(){
        modal.style.display = 'none'
        modalContent.style.display = 'none'
        inputid.value = ''
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
        projectDivArea.classList.add('projectDivArea')
        projectDivArea.setAttribute("id", currentProject)
        console.log(projectDivArea.id)

        projectDivArea.addEventListener('click', function() {
            header.textContent = projectDiv.textContent
            header.classList.add('header')
            header.appendChild(addTaskButton)
        })

        const projectIcons = document.createElement('div')
        const myTrash = new Image()
        myTrash.classList.add('imageOther')
        myTrash.src = Trash


        myTrash.addEventListener('click', function() {
            let i = myProjects.findIndex(item => item.id === projectDivArea.id)
            myProjects.splice(i, 1)
            projectList.removeChild(projectDiv)
            header.textContent = ' '
        })
        let index = myProjects.findIndex(item => item.id === projectDivArea.id)
        console.log(index)
        projectDivArea.textContent = myProjects[index].title
        projectDiv.classList.add('projectDiv')
        projectIcons.classList.add('icons')
        projectIcons.appendChild(myTrash)
        projectDiv.appendChild(projectDivArea)
        projectDiv.appendChild(projectIcons)
        projectList.appendChild(projectDiv)
        console.log(myProjects)
    }

    addTaskButton.addEventListener('click', function() {
        modalTask.style.display = 'block'
        modalTaskContent.style.display = 'block'
    })

    let closeClone = closeButton.cloneNode(true)


    closeClone.addEventListener('click', function() {
        modalTask.style.display = 'none'
        modalTaskContent.style.display = 'none'
    })





    submitButton.addEventListener('click', function(e) {
        const priorityTaskInput = document.querySelector('input[name="priority"]:checked')
        let newTodo = new Todo(titleTaskInput.value, descriptionTaskInput.value, priorityTaskInput.value, dateTaskInput.value)
        console.log(e)
        console.log(newTodo)
        form.reset()
        e.preventDefault()
        modalTask.style.display = 'none'
        modalTaskContent.style.display = 'none'
        dateTaskInput.value = new Date().toLocaleDateString('en-CA')
    })



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
    

    form.appendChild(titleTask)
    form.appendChild(titleTaskInput)
    form.appendChild(descriptionTask)
    form.appendChild(descriptionTaskInput)
    priorityTask.appendChild(low)
    priorityTask.appendChild(lowLabel)
    priorityTask.appendChild(medium)
    priorityTask.appendChild(mediumLabel)
    priorityTask.appendChild(high)
    priorityTask.appendChild(highLabel)
    form.appendChild(priorityTask)
    form.appendChild(dateTask)
    form.appendChild(submitButton)
    dateTask.appendChild(dateTaskInput)
    taskDiv.appendChild(closeClone)
    taskDiv.appendChild(form)
    
    modalTaskContent.appendChild(taskDiv)
 

    box.appendChild(headerText)
    box.appendChild(projectInterface)
    
    return box;
}

document.getElementById('container').appendChild(createInterface());


let myProjects = [];
let currentProject;




class Project {
    constructor(title) {
        this.title = title;
        this.tasks = []
        this.id = "id" + Math.random().toString(16).slice(2)
    }
    addTask(task) {
        return this.tasks.push(task)
    }
    removeTask() {
        return this.tasks.pop()
    }
    getId(){
        return this.id
    }
}




class Todo {
    constructor(title, description, priority, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = "id" + Math.random().toString(16).slice(2)

    }
    changeTitle(newTitle) {
        return this.title = newTitle
    }
    changeDescription(newDescription) {
        return this.description = newDescription
    }
    changeDueDate(newDueDate) {
        return this.dueDate = newDueDate
    }
    changePriority(newPriority){
        return this.priority = newPriority
    }
}

function storeProject() {
    let newProject = new Project(inputid.value)
    myProjects.push(newProject)
    currentProject = newProject.getId();
    console.log(currentProject)
}


