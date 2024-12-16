const text = document.getElementById("task");
const list = document.getElementById("list");

function addTask(){
    let task = text.value;
    if(task.length > 0){
        let li = document.createElement("li");
        li.innerHTML = task;
        list.appendChild(li);
        let del = document.createElement("del");
        del.innerHTML = "\u00d7";
        li.appendChild(del);
    }else{
        prompt("Please enter a task!");
    }
    text.value = "";
}

list.addEventListener("click", function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName == "DEL"){
        e.target.parentElement.remove();
    }
}, false);
