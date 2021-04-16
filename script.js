const clearAll = document.getElementById("clearAll-btn");
const date = document.getElementById("date");
const input = document.getElementById("input");
const list = document.getElementById("list");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete");

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

var count = 0;
var d = new Date();

setInterval(() => {
    date.innerHTML = week[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " " + d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}, 1000);

function addTask() {
    if (input.value != "") {
        var node1 = document.createElement("P");
        var node2 = document.createElement("BUTTON");
        var node3 = document.createElement("LI");

        node1.id = "text";
        node2.id = "delete";
        node3.className = "item";

        node1.innerHTML = input.value;
        node2.innerHTML = "X";

        list.appendChild(node3);
        node3.appendChild(node1);
        node3.appendChild(node2);

        input.value = "";
    }

}

addBtn.addEventListener('click', addTask);

clearAll.addEventListener('click', () => {
    list.innerHTML = "";
});