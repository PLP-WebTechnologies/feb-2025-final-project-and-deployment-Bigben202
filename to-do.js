
var btn=document.getElementById("btn");
function add() {
    var input=document.getElementById("input").value;
    var my_ol =document.getElementById("my-ol");
    var list= document.createElement("li");
    var txt= document.createTextNode(input);

     list.appendChild(txt);

    if (input == ""){
        alert("imput can not be empty")
    }else{
        my_ol.appendChild(list);  
    }


document.getElementById("input").value=""; 

var span= document.createElement("span");
var exit=document.createTextNode("\u00D7");
span.appendChild(exit);
list.appendChild(span);
span.className="close";


    span.onclick = function () {
        var div=this.parentElement;
        div.style.display='none';
        
    }

 
my_lists=document.querySelectorAll("li");
// when you only click content
my_lists.forEach ((element) => {
    element.onclick= function() {
        element.style.textDecoration='line-through';
        element.style.backgroundColor='lavender';
    }
    
});


my_lists.forEach ((element) => {
    element.ondblclick= function() {
        element.style.textDecoration='none';
        element.style.backgroundColor='white';
    }
    
});


}

btn.addEventListener("click", add);
// ////////////////////////////////////////////////////
/*  
list.forEach(enlement => {
    
});*/


