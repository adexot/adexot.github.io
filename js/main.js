window.onload = init;

function init(){
	document.getElementById('message_btn').onclick = function(){
		document.getElementById('modal').style.display = 'block';
		return false;
	};
}

document.querySelector('#modal .close_modal').onclick = function(){
	document.getElementById('modal').style.display = 'none';
	return false;
};

document.getElementById('send-btn').onclick = function(){
var name = document.getElementById('name').value;
var mail = document.getElementById('mail').value;
var message = document.getElementById('message').value;

	if(name =='' || mail =='' || message ==''){
		document.getElementById('error-msg').style.display = 'block';
		return;
	}
	
var service_id = 'adekunleoseni47';
var template_id = 'template_kpcl8mff';
var body = {
			name: name,
			email: mail,
			notes: message
			};
//send mail via the emailJs API
emailjs.send(service_id,template_id,body);
document.getElementById('modal').style.display = 'none';
};

function validate(name,mail,message){
	var name = name;
	var mail = mail;
	var message = message;
	if(name =='' || mail =='' || message ==''){
		var error = 'please fill all the available fields';
		return error;
	}

}