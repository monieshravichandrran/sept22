const addBtn = document.getElementById("addBtn");

function removed(event){
    console.log(event.target);
    event.target.remove();
}

addBtn.addEventListener("click",()=>{
    const todolistitem = document.getElementById("todolist-item").value;
    const container = document.getElementById("todolist");
    const outerContainer = document.getElementById("container");
    console.log(outerContainer.childNodes);
    const newItem = document.createElement("p");
    newItem.innerText = todolistitem;
    newItem.setAttribute('onclick','removed(event);')
    container.appendChild(newItem);
});
