const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswd1 = document.querySelector(".pswd1");
let pswd2 = document.querySelector(".pswd2");
function createPassword(){
    let incldNums = document.querySelector("#incld-num").checked;
    let incldSymbols = document.querySelector("#incld-sym").checked;
    let newArray =[];
    if(incldNums) newArray.push(...numbers);
    if(incldSymbols) newArray.push(...symbols);
    newArray.push(...characters);
    console.log(newArray);
    let passDigit = document.querySelector("#pass-digit").value;
    pswd1.textContent = "";
    pswd2.textContent = "";
    for(let i=0; i<passDigit; i++){
        let index1 = Math.floor(Math.random()*newArray.length);
        let index2 = Math.floor(Math.random()*newArray.length);
        pswd1.textContent += newArray[index1];
        pswd2.textContent += newArray[index2];
    }
    console.log(document.querySelector("#incld-num").checked)
}

function copyPassword1(){
    let text = pswd1.textContent;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copy to clipboard: "+ pswd1.textContent);
}

function copyPassword2(){
    let text = pswd1.textContent;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copy to clipboard: "+ pswd2.textContent);
}