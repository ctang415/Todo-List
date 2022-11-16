import './style.css';
import { lightFormat } from 'date-fns';
import Expand from './expand.png'
import Edit from './edit.png'
import Trash from './trash.png'

let myProjects = [];
let currentProject;

function createInterface() {
    const box = document.createElement('div')
    const titleText = document.createElement('div')
    const projectInterface = document.createElement('div')
    const topInterface = document.createElement('div')
    const allInterface = document.createElement('li')
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
    const taskBoxList = document.createElement('div')
    const submitButtonTwo = document.getElementById('submitButtonTwo')
    const editInput  = document.createElement('input')
    const editInputDiv = document.createElement('div')

    let currentIndex;
    let currentEdit;
    let currentDiv;



  function get7Days() {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    return lightFormat(date, 'yyyy-MM-dd');
  }

  function getToday() {
    let date = new Date();
    return lightFormat(date, 'yyyy-MM-dd');
  }


  let today = getToday()
  let nextWeek = get7Days();



    inputTitle.id = 'inputid'
    inputTitle.maxLength = 35
    dateTaskInput.value = today
    let currentDate = today
    

    titleText.classList.add('flex')
    projectInterface.classList.add('grid')
    topInterface.classList.add('top')
    bottomInterface.classList.add('bottom')
    plusButton.classList.add('projectplus')
    leftSide.classList.add('project')
    rightSide.classList.add('rightSide')
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
    titleTaskInput.classList.add('taskInputs')
    titleTask.classList.add('taskLabels')
    descriptionTask.classList.add('taskLabels')
    priorityTask.classList.add('taskLabels')
    dateTask.classList.add('taskLabels')
    descriptionTaskInput.classList.add('taskInputs')
    projectPlus.setAttribute('style', 'display: flex')
    taskBoxList.classList.add('stretchTask')
    editInputDiv.classList.add('buttons')
    editInput.classList.add('inputTitle')

    const modalClone = modal.cloneNode(true)
    const modalContentClone = modalContent.cloneNode(true)
    const addButtonClone = addButton.cloneNode(true)
 


    modalContentClone.textContent = ['Edit Project']
    addButtonClone.textContent = ['Submit']
    titleText.textContent = ['Taskit'];
    allInterface.textContent = ['All']
    allInterface.setAttribute('style', 'cursor: pointer')
    todayInterface.textContent = ['Today']
    todayInterface.setAttribute('style', 'cursor: pointer')
    weekInterface.textContent = ['Week']
    weekInterface.setAttribute('style', 'cursor: pointer')
    importantInterface.textContent = ['Important']
    importantInterface.setAttribute('style', 'cursor: pointer')
    project.textContent = ['Projects']
    plusButton.textContent = ["+"]
    modalContent.textContent = ['Add New Project']
    addButton.textContent = ['Submit']
    closeButton.textContent = ['X']
    addTaskButton.textContent = ['add task']

    allInterface.addEventListener('click', function(){
        header.textContent = 'All Tasks'
        header.classList.add('header')
        let childNodes = taskBoxList.querySelectorAll('[data-id="myTaskBox"]')
        for(let x=0; x < childNodes.length; x++)
        childNodes[x].style.display = 'none'
        for(let i=0; i < myProjects.length; i++){
            for (let j=0; j < myProjects[i].tasks.length; j++){
                    let grabTaskBox = document.getElementById(myProjects[i].tasks[j].getTodoId())
                    grabTaskBox.style.display = 'grid'
            }
        }
    })

    todayInterface.addEventListener('click', function(){
        header.textContent = `Today's Tasks`
        header.classList.add('header')
        let childNodes = taskBoxList.querySelectorAll('[data-id="myTaskBox"]')
        for(let x=0; x < childNodes.length; x++)
        childNodes[x].style.display = 'none'
        for(let i=0; i < myProjects.length; i++){
            for (let j=0; j < myProjects[i].tasks.length; j++){
                if(myProjects[i].tasks[j].dueDate === currentDate){
                    let grabTaskBox = document.getElementById(myProjects[i].tasks[j].getTodoId())
                    grabTaskBox.style.display = 'grid'
                }
            }
        }
    })


    weekInterface.addEventListener('click', function(){
        header.textContent = `Tasks Due in a Week`
        header.classList.add('header')
        let childNodes = taskBoxList.querySelectorAll('[data-id="myTaskBox"]')
        for(let x=0; x < childNodes.length; x++){
        childNodes[x].style.display = 'none'
        }
        for(let i=0; i < myProjects.length; i++){
            for (let j=0; j < myProjects[i].tasks.length; j++){
                if(((nextWeek.split("-")[2]) - (myProjects[i].tasks[j].dueDate).split("-")[2] <= 7) && (nextWeek.split("-")[2]) - (myProjects[i].tasks[j].dueDate).split("-")[2] >= 0) {
                    let grabTaskBox = document.getElementById(myProjects[i].tasks[j].getTodoId())
                    grabTaskBox.style.display = 'grid'
            }
        }
    }
})

    importantInterface.addEventListener('click', function(){
        header.textContent = 'Important Tasks'
        header.classList.add('header')
        let childNodes = taskBoxList.querySelectorAll('[data-id="myTaskBox"]')
        for(let x=0; x < childNodes.length; x++){
        childNodes[x].style.display = 'none'
        }
        for(let i=0; i < myProjects.length; i++){
            for (let j=0; j < myProjects[i].tasks.length; j++){
                if(myProjects[i].tasks[j].priority === "High"){
                    let grabTaskBox = document.getElementById(myProjects[i].tasks[j].getTodoId())
                    grabTaskBox.style.display = 'grid'
            }
        }
    }
    })

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
        header.classList.add('header')



        projectDivArea.addEventListener('click', function() {
            let index = myProjects.findIndex(item => item.id === projectDivArea.id)
            header.textContent = myProjects[index].title
            header.appendChild(addTaskButton)
            currentIndex = index
            let childNodes = taskBoxList.querySelectorAll('[data-id="myTaskBox"]')
            for(let x=0; x < childNodes.length; x++){
            childNodes[x].style.display = 'none'
            }
                for (let j=0; j < myProjects[index].tasks.length; j++){
                        let grabTaskBox = document.getElementById(myProjects[index].tasks[j].getTodoId())
                        grabTaskBox.style.display = 'grid'
                }
               console.log(index) 
    })

        const projectIcons = document.createElement('div')
        const myTrash = new Image()
        const myEdit = new Image()
        myTrash.classList.add('imageOther')
        myEdit.classList.add('image')
        myTrash.src = Trash
        myEdit.src = Edit
        myEdit.setAttribute('id', currentProject)
        currentEdit = myProjects.findIndex(item => item.id === projectDivArea.id)
        console.log(currentEdit)
        console.log(projectDivArea.id)


        myEdit.addEventListener('click', function(){
            currentDiv = this.id
            console.log(currentDiv)
            modalClone.style.display = 'block'
            modalContentClone.style.display = 'block'
            let value = myProjects.findIndex(item => item.id === projectDivArea.id)
            console.log(value)
            editInput.value = myProjects[value].title
            console.log(editInput.value)
            editInput.maxLength = 35;
            console.log(myProjects)
        })


        myTrash.addEventListener('click', function() {
            let i = myProjects.findIndex(item => item.id === projectDivArea.id)
            header.textContent = ''
            for(let j=0; j < myProjects[i].tasks.length; j++){
                let grabTaskBox = document.getElementById(myProjects[i].tasks[j].getTodoId())
                taskBoxList.removeChild(grabTaskBox)
            }
            myProjects[i].removeAllTasks()
            projectList.removeChild(projectDiv)
            myProjects.splice(i, 1)
            localStorage.setItem('projects', JSON.stringify(myProjects))
        })

        let index = myProjects.findIndex(item => item.id === projectDivArea.id)
        projectDivArea.textContent = myProjects[index].title
        projectDiv.classList.add('projectDiv')
        projectIcons.classList.add('icons')
        projectIcons.appendChild(myEdit)
        projectIcons.appendChild(myTrash)
        projectDiv.appendChild(projectDivArea)
        projectDiv.appendChild(projectIcons)
        projectList.appendChild(projectDiv)
        console.log(myProjects)
    }

    addButtonClone.addEventListener('click', function(){
        let value = myProjects.findIndex(item => item.id === currentDiv)
        myProjects[value].changeProjectTitle(editInput.value)

        localStorage.setItem('projects', JSON.stringify(myProjects))

        console.log(value)
        header.textContent = myProjects[value].title
        header.classList.add('header')
        header.appendChild(addTaskButton)
        let editDiv = currentDiv
        let divId = document.getElementById(editDiv)
        divId.textContent = myProjects[value].title
        modalClone.style.display = 'none'
        modalContentClone.style.display = 'none'
    })


    addTaskButton.addEventListener('click', function() {
        titleTaskInput.value = ''
        descriptionTaskInput.value = ''
        dateTaskInput.value = today
        submitButtonTwo.style.display = 'none'
        modalTask.style.display = 'block'
        modalTaskContent.style.display = 'block'
    })

    let closeClone = closeButton.cloneNode(true)
    let closeModalClone = closeButton.cloneNode(true)

    closeModalClone.addEventListener('click', function() {
        modalClone.style.display = 'none'
        modalContentClone.style.display = 'none'
    })


    closeClone.addEventListener('click', function() {
        if(submitButton.style.display = 'none'){
            submitButton.style.display = 'block'
        }
        titleTaskInput.value = ''
        descriptionTaskInput.value = ''
        modalTask.style.display = 'none'
        modalTaskContent.style.display = 'none'
    })

    let taskId;

    submitButton.addEventListener('click', function(e) {
        const priorityTaskInput = document.querySelector('input[name="priority"]:checked')
        let newTodo = new Todo(titleTaskInput.value, descriptionTaskInput.value, priorityTaskInput.value, dateTaskInput.value)
        taskId = newTodo.getTodoId()
        myProjects[currentIndex].addTask(newTodo)
        createTasks();
        localStorage.setItem('projects', JSON.stringify(myProjects))
        form.reset()
        e.preventDefault()
        modalTask.style.display = 'none'
        modalTaskContent.style.display = 'none'
        dateTaskInput.value = today
    })

    let currentTask;



    function createTasks() {
        const taskBox = document.createElement('div')
        const taskBoxArea = document.createElement('div')
        const taskSpanTitle = document.createElement('span')
        const taskSpanDate = document.createElement('span')
        const checkBox = document.createElement('input')
        const taskBoxExpand = document.createElement('div')
        const taskSpanDescription = document.createElement('div')
        const taskSpanPriority = document.createElement('div')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.classList.add('checkBox')
        taskBox.classList.add('taskBoxesGrid')
        taskBoxArea.classList.add('taskArea')
        const taskIcons = document.createElement('div')
        const myTrash = new Image()
        const myEdit = new Image()
        const myExpand = new Image()
        taskIcons.classList.add('taskIcons')
        myExpand.src = Expand
        myEdit.src = Edit
        myTrash.src = Trash
        myExpand.setAttribute('style', 'height: 2.8vw')
        myEdit.setAttribute('style', 'height: 2.6vw')
        myTrash.setAttribute('style', 'height: 2.9vw')
        myExpand.classList.add('cursor')
        myEdit.classList.add('cursor')
        myTrash.classList.add('cursor')
        taskBox.setAttribute('id', taskId)
        taskSpanTitle.setAttribute('data-id', 'title')
        taskSpanDate.setAttribute('data-id', 'date')
        taskBoxExpand.classList.add('taskBoxExpand')
        taskSpanDescription.classList.add('taskBoxDescription')
        taskSpanDescription.setAttribute('data-id', 'description')
        taskSpanPriority.setAttribute('data-id', 'priority')
        taskSpanPriority.classList.add('taskBoxPriority')
        taskBox.setAttribute('data-id', 'myTaskBox')
    


        taskBox.addEventListener('click', function(){
            currentTask = this.id
        })

        myExpand.addEventListener('click', function(){
            if(taskBoxExpand.style.display === 'none') {
            taskBoxExpand.style.display = 'block'
            }
            else {
                taskBoxExpand.style.display = 'none'
            }
        })



        myTrash.addEventListener('click', function() {
            let findTask = myProjects[currentIndex].tasks.findIndex(item => item.id === taskBox.id)
            myProjects[currentIndex].removeTask(findTask)
            taskBoxList.removeChild(taskBox)
            localStorage.setItem('projects', JSON.stringify(myProjects))
            console.log(myProjects)
        })


        myEdit.addEventListener('click', function(){
            const priorityTaskInput = document.querySelector('input[name="priority"]:checked')
            titleTaskInput.value = myProjects[currentIndex].tasks[taskIndex].title
            descriptionTaskInput.value = myProjects[currentIndex].tasks[taskIndex].description
            priorityTaskInput.value = myProjects[currentIndex].tasks[taskIndex].priority
            dateTaskInput.value = myProjects[currentIndex].tasks[taskIndex].dueDate
            modalTask.style.display = 'block'
            modalTaskContent.style.display = 'block'
            submitButton.style.display = 'none'
            submitButtonTwo.style.display = 'block'
        })


        let taskIndex = myProjects[currentIndex].tasks.findIndex(item => item.id === taskBox.id)
        taskSpanTitle.textContent = myProjects[currentIndex].tasks[taskIndex].title
        taskSpanDate.textContent = myProjects[currentIndex].tasks[taskIndex].dueDate
        taskSpanDescription.textContent = myProjects[currentIndex].tasks[taskIndex].description
        taskSpanPriority.textContent = 'Priority: ' + myProjects[currentIndex].tasks[taskIndex].priority
        taskBox.appendChild(checkBox)
        taskBoxArea.appendChild(taskSpanTitle)
        taskBoxArea.appendChild(taskSpanDate)
        taskBox.appendChild(taskBoxArea)
        taskBox.appendChild(taskIcons)
        taskIcons.appendChild(myExpand)
        taskIcons.appendChild(myEdit)
        taskIcons.appendChild(myTrash)
        taskBoxExpand.appendChild(taskSpanDescription)
        taskBoxExpand.appendChild(taskSpanPriority)
        taskBox.appendChild(taskBoxExpand)
        taskBoxList.appendChild(taskBox)

        taskBoxExpand.style.display = 'none'

        checkBox.addEventListener('change', function(){
            if(this.checked) {
                taskSpanTitle.style.setProperty('text-decoration', 'line-through')
                taskSpanDate.style.setProperty('text-decoration', 'line-through')
                taskSpanDescription.style.setProperty('text-decoration', 'line-through')
                taskSpanPriority.style.setProperty('text-decoration', 'line-through')
            }
            else {
                taskSpanTitle.style.setProperty('text-decoration', 'none')
                taskSpanDate.style.setProperty('text-decoration', 'none')
                taskSpanDescription.style.setProperty('text-decoration', 'none')
                taskSpanPriority.style.setProperty('text-decoration', 'none')
            }
        })
    }



    submitButtonTwo.addEventListener('click', function(e){
        const priorityTaskInput = document.querySelector('input[name="priority"]:checked')
        let myTask = myProjects[currentIndex].tasks.findIndex(item => item.id === currentTask)
        myProjects[currentIndex].tasks[myTask].changeTitle(titleTaskInput.value)
        myProjects[currentIndex].tasks[myTask].changeDescription(descriptionTaskInput.value)
        myProjects[currentIndex].tasks[myTask].changeDueDate(dateTaskInput.value)
        myProjects[currentIndex].tasks[myTask].changePriority(priorityTaskInput.value)
        let getTaskTitle = document.getElementById(currentTask).querySelector('[data-id="title"]')
        let getTaskDate = document.getElementById(currentTask).querySelector('[data-id="date"]')
        let getTaskDescription = document.getElementById(currentTask).querySelector('[data-id="description"]')
        let getTaskPriority = document.getElementById(currentTask).querySelector('[data-id="priority"]')
        getTaskTitle.textContent = myProjects[currentIndex].tasks[myTask].title
        getTaskDate.textContent = myProjects[currentIndex].tasks[myTask].dueDate
        getTaskDescription.textContent = myProjects[currentIndex].tasks[myTask].description
        getTaskPriority.textContent = 'Priority: ' + myProjects[currentIndex].tasks[myTask].priority
        localStorage.setItem('projects', JSON.stringify(myProjects))
        e.preventDefault()
        modalTask.style.display = 'none'
        modalTaskContent.style.display = 'none'
        submitButton.style.display = 'block'
        submitButtonTwo.style.display = 'none'
    })

    topInterface.appendChild(allInterface)
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

    modalClone.appendChild(modalContentClone)
    project.appendChild(modalClone)

    modalContentClone.appendChild(closeModalClone)
    editInputDiv.appendChild(editInput)
    editInputDiv.appendChild(addButtonClone)
    modalContentClone.appendChild(editInputDiv)

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
    form.appendChild(submitButtonTwo)
    dateTask.appendChild(dateTaskInput)
    taskDiv.appendChild(closeClone)
    taskDiv.appendChild(form)
    
    modalTaskContent.appendChild(taskDiv)
 
    rightSide.appendChild(taskBoxList)
    box.appendChild(titleText)
    box.appendChild(projectInterface)
    console.log(myProjects)
    return box;
}

document.getElementById('container').appendChild(createInterface());






class Project {
    constructor(title) {
        this.title = title;
        this.tasks = []
        this.id = "id" + Math.random().toString(16).slice(2)
    }
    addTask(task) {
        return this.tasks.push(task)
    }
    removeTask(index) {
        return this.tasks.splice(index, 1)
    }
    removeAllTasks(){
        return this.tasks.splice(0, this.tasks.length)
    }
    getId(){
        return this.id
    }
    changeProjectTitle(newTitle){
        return this.title = newTitle
    }
}


class Todo {
    constructor(title, description, priority, dueDate){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
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
    getTodoId() {
        return this.id
    }
}


/*
        let projectStorage = JSON.parse(localStorage.getItem('projects') || "[]")
        let theProject = JSON.parse(localStorage.getItem('projects', projectStorage[0]))
        let storageIndex = theProject.findIndex(item => item.id === currentDiv)
        localStorage.setItem('projects', JSON.stringify(myProjects))
*/

function storeProject() {
    let newProject = new Project(inputid.value)
    myProjects.push(newProject)
    currentProject = newProject.getId();
            projectStorage.push(newProject)
            localStorage.setItem('projects', JSON.stringify(projectStorage))
}

// Creates the array in local storage
if(!localStorage.getItem("projects")){
    localStorage.setItem('projects', JSON.stringify([]))
}

// Selects the array 
let projectStorage = JSON.parse(localStorage.getItem('projects') || "[]")

// Pushes local storage objects into myProjects array
function renderLocalStorage(){
    let theProject = JSON.parse(localStorage.getItem('projects', projectStorage[0]))
    theProject.forEach(element => myProjects.push(element))
    localStorage.clear()
}
renderLocalStorage();
