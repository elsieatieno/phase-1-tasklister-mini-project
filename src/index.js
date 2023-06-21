document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) =>{
    e.preventDefault()
    activeTodo(e.target.create-task-form.value);
    form.reset()})
});

function activeTodo(todo){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  p.textContent = todo
  btn.textContent = "x"
  btn.addEventListener("click", deleteTodo)
  p.appendChild(btn)
  document.querySelector("#tasks").appendChild(p)
}
function deleteTodo(e){
  e.target.parentNode.remove()
}