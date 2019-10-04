// declare variables to find HTML elements

let txtField = document.getElementById("text");
let addBtn = document.getElementById("addBtn");
let delBtn = document.getElementById("delBtn");
let list = document.getElementById("list");

// onclick Add Button will add a list item with text in txt-field
addBtn.addEventListener("click", function() {
    let listItem = document.createElement("li"); //new list item created
    listItem.innerText = txtField.value; //created list item with text from txt-field

    //when some item is clicked, style of it changes
    listItem.addEventListener("click", function() {
        listItem.classList.add("chosen");
        //remove marked item
        delBtn.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete an item?")) {
            listItem.remove();
            }
        }, false)
    }, false)

    // remove styles and unmark the item
    listItem.addEventListener("dblclick", function() {
        listItem.classList.remove("chosen");
    }, false)

    // this helps a new list item to be created and shown on page:
    list.appendChild(listItem); 
}, false)