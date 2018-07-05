var closeList = document.getElementsByClassName('close');
var myNodeList = document.getElementsByTagName('LI');
var taskList = document.getElementById('myUL');

function addClose(el) {
	var span = document.createElement('SPAN');
	var text = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(text);
	el.appendChild(span);

	for(var i = 0; i < closeList.length; i++) {
	closeList[i].onclick = function(){
		var task = this.parentElement;
		task.style.display = "none";
		}
	}
}


for(var i = 0; i < myNodeList.length; i++){
	addClose(myNodeList[i]);	
}

checked();


function checked(){
	for(var i = 0; i < myNodeList.length; i++){
	myNodeList[i].onclick = function(){
		this.className = "done";
	}
}
}

function newElement(){
	var li = document.createElement('li');
	var val = document.getElementById('myInput').value;
	if(val === ''){
		alert('Add task description');
	} else {
		var text = document.createTextNode(val);
		li.appendChild(text);
		taskList.appendChild(li);
	}
	
	addClose(li);
	checked();
}