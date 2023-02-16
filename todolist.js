const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click",()=>{
    const todolistitem = document.getElementById("todolist-item").value;
    const container = document.getElementById("todolist");
    const outerContainer = document.getElementById("container");
    console.log(outerContainer.childNodes);
    const newItem = document.createElement("p");
    newItem.innerText = todolistitem;
    container.appendChild(newItem);
});
