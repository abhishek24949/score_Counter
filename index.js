let h111 = document.getElementById("h11")
let h112 = document.getElementById("h12")
let count1 = 0,count2 = 0

function add1(){
    count1 += 1
    h111.textContent = count1    
}
function add2(){
    count1 += 2
    h111.textContent = count1    
}
function add3(){
    count1 += 3
    h111.textContent = count1    
}
function add11(){
    count2 += 1
    h112.textContent = count2   
}
function add12(){
    count2 += 2
    h112.textContent = count2    
}
function add13(){
    count2 += 3
    h112.textContent = count2 
    console.log(count2)   
}

function newGame(){
    count1 = 0
    count2 = 0
    h111.textContent = 0
    h112.textContent = 0
}
