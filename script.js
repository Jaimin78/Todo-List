let todolist = []
const addToDo = () => {
  let todo = document.getElementById('input').value;
  if(todo == "" || todo == null){
    alert("Please Enter Todo")
  }
  else{
  let list = {
    todo: todo,
    status: "Not Complete"
  }
  todolist.push(list)
  let saveList = JSON.stringify(todolist)
  localStorage.setItem("todo",saveList)
  }
  getTodo()
}

const getTodo = () => {
  let todos = Array.from(JSON.parse(localStorage.getItem("todo")))
  ihtml = "";
  for(i in todos){
    ihtml += `
      <li class="list-group-item d-flex mb-1 justify-content-between align-items-center">
    ${todos[i].todo}
            <button type="button" class="btn-close" onClick = "removeTodo(${todo[i]})" aria-label="Close"></button>
           </li>
    `
  }
  showtodo.innerHTML = ihtml
}

const removeTodo = () =>{
  
}

setTimeout(()=>{
  getTodo()
},2000)