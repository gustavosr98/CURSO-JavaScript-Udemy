const todoId = location.hash.substring(1)
const todos = getSavedTodos()
const todo = todos.find( function(item){
    return item.id === todoId
})

console.log(todo)

if (todo === undefined)
    location.assign('/index.html')

document.querySelector('input#todo-title').value = todo.text

document.querySelector('#cambios').addEventListener('submit', function(e){
    e.preventDefault()
    todo.text = e.target.elements.newName.value
    saveTodos(todos)
    location.assign('/index.html')
})