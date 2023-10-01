const input = document.getElementById("input");
const listContainer = document.getElementById("list-container") ;

function AddTask(){
    if(input.value === ''){
        alert('Type something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    savedata();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
    savedata();
})
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function getdata(){
    listContainer.innerHTML = localStorage.getItem("data");
}
getdata();