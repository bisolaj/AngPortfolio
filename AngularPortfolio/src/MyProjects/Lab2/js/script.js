let addTitleBtn = document.getElementById('addTitleBtn');
let addItemBtn = document.getElementById('addItemBtn');
let clearListBtn = document.getElementById('clearListBtn');
let pCounter = 1;
let addElements = document.getElementById('addElements');
let toDoElements = [];
//let title;
//let listTitle=document.getElementById(listTitle);
//let toDoList =[title,toDoElements];
let i;
let counter =0;

//call function to Empty the to do list
clearListBtn.addEventListener('click',function(e) {
    clearList();
});

//call the function to creates list title
addTitleBtn.addEventListener('click',function(e) 
{
    let listTitle=document.getElementById("listTitle").value;
    if (listTitle==='')
    {
        alert('You must enter a List Title!');
    }
    else
    {   createPElement(listTitle);
        //title=listTitle;
    }
    document.getElementById("listTitle").value="";
});

//creates list title if Enter key is pressed
listTitle.addEventListener('keypress',function(e)
{
    if (e.code === 'Enter' && listTitle != '')
    {
        createPElement(listTitle.value);
        document.getElementById("listTitle").value="";
    }
});

//creates list item if Enter key is pressed
listItem.addEventListener('keypress',function(e)
{
    if (e.code === 'Enter' && listItem != '')
    {
        createLiElement(listItem.value);
        document.getElementById("listItem").value="";

        //localStorage.setItem('todo', JSON.stringify(toDoList));
        localStorage.setItem('todo', JSON.stringify(toDoElements));
    }
});

//this function creates list title
function createPElement(content)
{
    let pElement = document.createElement('h2');
    pElement.innerText = content;
    pElement.setAttribute('class','list-group-item');
    pElement.setAttribute('id',pCounter);
    addElements.append(pElement);
    pCounter++;
}
//function to creates list item
function createLiElement(content)
{
       //create a UL Element
       let ulElement = document.createElement('ul');
        let listItem=document.getElementById('listItem').value;
        listItem = content;
        let btn = document.createElement("button");
        
        //ulElement.setAttribute('class', 'd-flex justify-content-center');
        btn.innerText = "Delete";    
       //adding a list element
       let listElement = document.createElement('li');
       listElement.innerText=listItem;
       listElement.setAttribute('class','list-group-item');
        listElement.setAttribute('id',counter);
       //btn.setAttribute('id',counter);
       counter = document.getElementById('listElement');
      btn.addEventListener('click',function(e) {
          console.log("Deleting item no: " + counter);
            deleteFromLocal(toDoElements[counter]);
    });
       listElement.append(btn);
       ulElement.append(listElement);
       counter++;
       //appending items in the proper order
    //appending list elements to ul elements
        addElements.append(ulElement);
        toDoElements.push(listItem);
       console.log(toDoElements);
        listElement.addEventListener('click',function(e) {
        listElement.contentEditable=true;
    });

    document.getElementById("listItem").value="";
}
addItemBtn.addEventListener('click',function(e) {

    let listItem=document.getElementById("listItem").value;
    if (listItem==='')
    {
        alert('You must enter a List Item!');
    }
    else
    {   createLiElement(listItem);
        counter++;
        localStorage.setItem('todo', JSON.stringify(toDoElements));
        //localStorage.setItem('todo', JSON.stringify(toDoList));
    }
    document.getElementById("listItem").value="";
});

if (localStorage.getItem('todo') !== '') {
    console.log(JSON.parse(localStorage.getItem('todo')));
    let todoLocal = JSON.parse(localStorage.getItem('todo'));
    //populate array items into p tags
    for (let i = 0; i < todoLocal.length; i++) {
        createLiElement(todoLocal[i]);
    }
    toDoElements = todoLocal;
    //toDoList = todoLocal;
}

function deleteFromLocal(x) {
    
    console.log(toDoElements);
    for (let i = 0; i < toDoElements.length; i++) {
        console.log(toDoElements[i] + ": " + x);
        if (toDoElements[i] === x) {
            toDoElements.splice(i, 1);
            console.log("-----------------Spliced");
            localStorage.setItem('todo', JSON.stringify(toDoElements));
        }
    }
    console.log("after Splice" + toDoElements);
}
//this function erase all the to do list
function clearList() {
     console.log(toDoElements);
    for (let i = 0; i < toDoElements.length; i++) {
     //   console.log(toDoElements[i] + ": " + x);
        //if (toDoElements[i] === x) {
            toDoElements.splice(i, toDoElements.length);
            console.log("-----------------Spliced");
            localStorage.setItem('todo', JSON.stringify(toDoElements));
        //}
    }
    console.log("after Splice" + toDoElements);
}
