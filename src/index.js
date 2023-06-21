document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) =>{
    e.preventDefault()
    activeTodo(e.target.create-task-form.value);
    form.reset()})
});

function activeTodo(todo){
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener("click", deleteTodo)
  li.textContent = todo
  btn.textContent = "x"
  li.appendChild(btn)
  document.querySelector("#list").appendChild(li)
}
function deleteTodo(e){
  e.target.parentNode.remove()
}