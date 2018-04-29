
function submit () {
	var input=document.getElementById('input').value;
	var task=document.getElementById('tasks');
	var li=document.createElement('li');

	li.appendChild(document.createTextNode("" + input));
	task.appendChild(li);
	document.getElementById('input').value="";
	li.onclick=removeItem;
}
	var entree = document.body;
	entree.onkeyup = function (e){
		if (e.keycode == 13){
			newItem();
		}
	}
/*var checkbox=document.createElement('checkbox');
	checkbox.type='checkbox';
	var li=document.createElement('li');
	texte=document.createElement('label');

	li.appendChild(checkbox);
	li.appendChild(input); */