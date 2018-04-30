function submit() {
	var input=document.getElementById('userinput').value;
	var task=document.getElementById('tasks');
	var list=document.createElement('li');

	task.appendChild(list);
	list.innerHTML=input;

	console.log(input);
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