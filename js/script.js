const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", (e) => {
    // console.log(e.key);
    if(e.key == "Enter"){
        // console.log(e.target.value);
        addToDo(e.target.value);
        e.target.value = "";
    }
})

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fa-solid fa-xmark"></i>
    `;
    toDoBox.appendChild(listItem);
}