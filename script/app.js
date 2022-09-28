
let count = 0;
let saveEl = document.getElementById("save-el")
let countFl = document.getElementById("count-el")


function increament() {

    count = count + 1
    countFl.innerText = count;
}


let logOut = document.getElementById("count-el")

function save() {
        
    let countSt = " " + count + " - "
    saveEl.innerText += countSt
    countFl.innerText = 0
    count = 0
  
}

function resetall() {
    
    saveEl.innerText = " "
    countFl.innerText = 0
    count = 0 
}



