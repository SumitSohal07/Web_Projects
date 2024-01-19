// to access anything in html we use

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li")
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete"
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value="";// this line is used to clear the text area after the add task button is clicked
});

    let delbtns = document.querySelectorAll(".delete");
    for(delbtn of delbtns){
        delbtn.addEventListener("click", function(){
            console.log("element deleted");
            let par= this.parentElement;
            console.log(par);
            par.remove();
});
}