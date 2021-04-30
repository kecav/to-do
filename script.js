const clearAll = document.getElementById("clearAll-btn");
const date = document.getElementById("date");
const input = document.getElementById("input");
const list = document.getElementById("list");
const addBtn = document.getElementById("add-btn");
const doneBtn = document.getElementsByClassName("done-btn");
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var d = new Date();

setInterval(() => {
    date.innerHTML = week[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " " + d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}, 1000);

clearAll.addEventListener('click', () => {
    list.innerHTML = "";
});

addBtn.addEventListener('click', () => {
    if (input.value != "") {

        //Creating li element for task to be added
        let li = document.createElement("li");
        li.classList.add("item");
        //Adding input value to li
        li.innerHTML = input.value;
        list.appendChild(li);

        //Creating button for done
        Btn = document.createElement('button');
        Btn.setAttribute('class', 'done-btn');
        Btn.setAttribute("onclick", "deleteTask()");
        Btn.innerText = "✓";
        li.appendChild(Btn);

        //Clearing input field
        input.value = "";
        console.log("Task added successfully");
    }
});

function deleteTask() {
    console.log("deleteTask is called");
    for (let i = 0; i < doneBtn.length; i++) {
        doneBtn[i].onclick = function() {
            this.parentElement.style.display = "none";
        }
    }
}
