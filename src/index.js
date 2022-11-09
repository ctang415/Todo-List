import './style.css';
import Expand from './expand.png'
import Edit from './edit.png'
import Trash from './trash.png'


function createInterface() {
    const box = document.createElement('div')
    const headerText = document.createElement('div')
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
    taskBoxList.classList.add('stretchTask')
    const submitButtonTwo = document.getElementById('submitButtonTwo')

    let currentIndex;
    let currentEdit;
    let currentDiv;

    inputTitle.id = 'inputid'
    inputTitle.maxLength = 35
    dateTaskInput.value = new Date().toLocaleDateString('en-CA')
    let currentDate = new Date().toLocaleDateString('en-CA')


 
    headerText.classList.add('flex')
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

    const modalClone = modal.cloneNode(true)
    const modalContentClone = modalContent.cloneNode(true)
    const addButtonClone = addButton.cloneNode(true)
    const editInput  = document.createElement('input')
    const editInputDiv = document.createElement('div')


    editInputDiv.classList.add('buttons')
    editInput.classList.add('inputTitle')


    modalContentClone.textContent = ['Edit Project']
    addButtonClone.textContent = ['Submit']


    headerText.textContent = ['Taskit'];
    allInterface.textContent = ['All']
    todayInterface.textContent = ['Today']
    weekInterface.textContent = ['This Week']
    importantInterface.textContent = ['Important']
    project.textContent = ['Projects']
    plusButton.textContent = ["+"]
    modalContent.textContent = ['Add New Project']
    addButton.textContent = ['Submit']
    closeButton.textContent = ['X']
    addTaskButton.textContent = ['add task']

    allInterface.addEventListener('click', function(){
        while(taskBoxList.firstChild){
            taskBoxList.removeChild(taskBoxList.firstChild)
        }
    })



    weekInterface.addEventListener('click', function(){
        while(taskBoxList.firstChild){
            taskBoxList.removeChild(taskBoxList.firstChild)
        }
    })

    importantInterface.addEventListener('click', function(){
        while(taskBoxList.firstChild){
            taskBoxList.removeChild(taskBoxList.firstChild)
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


        myEdit.addEventListener('click', function(){
            currentDiv = this.id
            console.log(currentDiv)
            modalClone.style.display = 'block'
            modalContentClone.style.display = 'block'
            let value = myProjects.findIndex(item => item.id === projectDivArea.id)
            editInput.value = myProjects[value].title
            console.log(myProjects[value].title)
        })


        myTrash.addEventListener('click', function() {
            let i = myProjects.findIndex(item => item.id === projectDivArea.id)
            myProjects.splice(i, 1)
            projectList.removeChild(projectDiv)
            header.textContent = ''
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
        console.log(myProjects[currentEdit])
        myProjects[currentEdit].changeProjectTitle(editInput.value)
        header.textContent = myProjects[currentEdit].title
        header.classList.add('header')
        header.appendChild(addTaskButton)
        let editDiv = currentDiv
        let divId = document.getElementById(editDiv)
        divId.textContent = myProjects[currentEdit].title
        modalClone.style.display = 'none'
        modalContentClone.style.display = 'none'
    })


    addTaskButton.addEventListener('click', function() {
        titleTaskInput.value = ''
        descriptionTaskInput.value = ''
        dateTaskInput.value = new Date().toLocaleDateString('en-CA')
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
        console.log(newTodo.getTodoId())
        taskId = newTodo.getTodoId()
        myProjects[currentIndex].addTask(newTodo)
        console.log(taskId)
        console.log(myProjects[currentIndex].getList())
        console.log(myProjects)
        createTasks();
        form.reset()
        e.preventDefault()
        modalTask.style.display = 'none'
        modalTaskContent.style.display = 'none'
        dateTaskInput.value = new Date().toLocaleDateString('en-CA')
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
            console.log(currentTask)
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
            console.log(taskBox.id)
            console.log(currentIndex)
            console.log(findTask)
            myProjects[currentIndex].removeTask(findTask)
            taskBoxList.removeChild(taskBox)
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
        console.log(taskIndex)
        taskSpanTitle.textContent = myProjects[currentIndex].tasks[taskIndex].title
        taskSpanDate.textContent = myProjects[currentIndex].tasks[taskIndex].dueDate
        taskSpanDescription.textContent = myProjects[currentIndex].tasks[taskIndex].description
        taskSpanPriority.textContent = 'Priority: ' + myProjects[currentIndex].tasks[taskIndex].priority
        console.log(myProjects[currentIndex])
        console.log(myProjects[currentIndex].tasks[taskIndex].title)
        console.log(myProjects[currentIndex].tasks[taskIndex].description)
        console.log(myProjects[currentIndex].tasks[taskIndex].dueDate)
        console.log(myProjects[currentIndex].tasks[taskIndex].priority)
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

/*
    todayInterface.addEventListener('click', function(){
        while(taskBoxList.firstChild){
            taskBoxList.removeChild(taskBoxList.firstChild)
        }
        for(let i=0; i < myProjects.length; i++){
            for (let j=0; j < myProjects[i].tasks.length; j++){
                if(myProjects[i].tasks[j].dueDate === currentDate){
                    let grabTaskBox = document.getElementById(myProjects[i].tasks[j].getTodoId())
                    console.log(grabTaskBox)
                    taskBoxList.appendChild(grabTaskBox)
                }
            }
        }
    })
*/

todayInterface.addEventListener('click', function(){
    let childNodes = taskBoxList.querySelectorAll('[data-id="myTaskBox"]')
    for(let x=0; x < childNodes.length; x++)
    childNodes[x].style.display = 'none'
    for(let i=0; i < myProjects.length; i++){
        for (let j=0; j < myProjects[i].tasks.length; j++){
            if(myProjects[i].tasks[j].dueDate === currentDate){
                let grabTaskBox = document.getElementById(myProjects[i].tasks[j].getTodoId())
                console.log(grabTaskBox)
                grabTaskBox.style.display = 'grid'
            }
        }
    }
})



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
    removeTask(index) {
        return this.tasks.splice(index, 1)
    }
    getList() {
        return this.tasks
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

function storeProject() {
    let newProject = new Project(inputid.value)
    myProjects.push(newProject)
    currentProject = newProject.getId();
    console.log(currentProject)
}


