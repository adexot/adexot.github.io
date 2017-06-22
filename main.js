// (function(){
//       emailjs.init("user_wVPfCECEJE2rlJCtYr11g");
//    })();

let modBtn = document.querySelector('#modalBtn');
let closeBtn = document.querySelector('.close');
let msgBtn = document.querySelector('#msgBtn')

// Register all eventListeners here
addListener(modBtn,'click', openModal);
addListener(closeBtn,'click', closeModal);
addListener(msgBtn,'click', validateInput);

document.querySelector('#from').addEventListener('blur', validateFrom);
document.querySelector('#subject').addEventListener('blur', validateSubject);
document.querySelector('#message').addEventListener('blur', validateMessage);
document.querySelector('#name').addEventListener('blur', validateName);


// Declare all functions here
function openModal(){
    let modal = document.querySelector('.modal');
    modal.style.display = "block";
}

function closeModal(){
    let modal = document.querySelector('.modal');
    modal.style.display = "none";
}

function validateInput(){
    let inputArray = [
        document.querySelector("#from"),
        document.querySelector("#subject"),
        document.querySelector("#message"),
        document.querySelector("#name")
    ];
     inputArray.forEach((user) => {
         if(user.value.length === 0){
            user.style.border = "1px solid red";
            return false;
         }
         else{ 
             sendMessage(inputArray)
             return true;
        }
     });
}

function validateFrom(){
    let val = document.querySelector('#from');
    if(val.value === ""){
        val.style.borderBottom = "1px solid red";
        return false
    }
    val.style.border = "0";
    val.style.borderBottom = "1px dashed #ccc";
}

function validateSubject(){
    let val = document.querySelector('#subject');
    if(val.value === ""){
        val.style.borderBottom = "1px solid red";
        return false
    }
    val.style.border = "0";
    val.style.borderBottom = "1px dashed #ccc";
}

function validateMessage(){
    let val = document.querySelector('#message');
    if(val.value === ""){
        val.style.borderBottom = "1px solid red";
        return false
    }
    val.style.border = "0";
    val.style.borderBottom = "1px dashed #ccc";
}

function validateName(){
    let val = document.querySelector('#name');
    if(val.value === ""){
        val.style.borderBottom = "1px solid red";
        return false
    }
    val.style.border = "0";
    val.style.borderBottom = "1px dashed #ccc";
}

function sendMessage(input){
    // initialize the emailJS config
    emailjs.init("user_wVPfCECEJE2rlJCtYr11g");
    
    var service_id = 'adekunleoseni47';
    var template_id = 'template_kpcl8mff';
    var body = {
                subject: input[1],
                name: input[3],
                email: input[0],
                notes: input[2]
                };
    //send mail via the emailJs API
    
    emailjs.send(service_id,template_id,body);
    document.querySelector('.modal').style.display = 'none';
}

function addListener(obj, type, fn){
    if(obj && obj.addEventListener){
        obj.addEventListener(type,fn,false);
    }
    else{
        obj.attachEvent('on'+type, fn);
    }
}