class Task{
    constructor(task){
        this.task=task;
    }
    displayDetails(){
        console.log(this.task);
    }
}

let tasksList=[];

function clickme(){
    const taskInput=document.getElementById("taskInput");
    if(taskInput.value !== ""){
    let newtask= new Task(taskInput.value);
    tasksList.push(newtask);
    taskInput.value="";
    displayTasks();
    }
}
function displayTasks(){
    const taskListElement=document.getElementById("taskList");
    taskListElement.innerHTML="";
    tasksList.forEach(t =>{
        const listItem=document.createElement("li");
        listItem.textContent=`The task is ${t.task}`;
        taskListElement.appendChild(listItem);
    })
}