let text = document.getElementById("text");
let addBtn = document.getElementById("addBtn")
let list = document.getElementById("list");
let delBtn = document.getElementById("delBtn");
let fullList = [];

addBtn.addEventListener("click", function () {
    let newLi = document.createElement('li'); 
    newLi.className = "chosen"; 
    newLi.innerText= text.value;

    newLi.addEventListener("click", function(e) {
        if(e.target.tagName = "li") {
            e.target.style.backgroundColor = "yellow";
            e.target.style.fontStyle = "italic";
            
            delBtn.addEventListener("click", function() {
                if (confirm("Are you sure you want to remove an item?")) {
                newLi.remove();
                }
            }, false)
        }
    }, false)

    list.appendChild(newLi);
    fullList.push(text.value);
}, false)