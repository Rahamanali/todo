
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click',deletecheck);
filteroption.addEventListener('click',filterTodo);

//Functions
function addTodo(event){
    event.preventDefault()

//Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//create Li
const newTodo = document.createElement("li");
newTodo.innerText =todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//Check Mark Button
const completedbutton = document.createElement("button")
completedbutton.innerHTML = '<i class="fas fa-check"></i>'
completedbutton.classList.add("complete-btn");
todoDiv.appendChild(completedbutton);

//CHECK trash Button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//Append To List
todoList.appendChild(todoDiv);

//clear Todo Input Value 
todoInput.value="";

}

function deletecheck(e){
    const item = e.target;

    //Delete Todo

    if (item.classList[0]==="trash-btn"){
       const todo = item.parentElement;
       todo.classList.add('fall');
       todo.addEventListener('transitioned', function(){
           todo.remove();
       })
    }

    //CHECK MARK
    if(item.classList[0]==="complete-btn"){

        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all";
            break;
            case "completed":
                
        }

    });
}















