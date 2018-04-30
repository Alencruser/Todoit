function submit() {
	var input=document.getElementById('userinput').value;
	var task=document.getElementById('tasks');
	var list=document.createElement('li');
	var check=document.createElement('input');

	check.type='checkbox';
	check.id='task';

	task.appendChild(list);
	task.appendChild(check);

	list.innerHTML=input;

	if (check.checked==true){
		list.style.textDecoration="line-through";
	}

}
	


/*var checkbox=document.createElement('checkbox');
	checkbox.type='checkbox';
	var li=document.createElement('li');
	texte=document.createElement('label');

	li.appendChild(checkbox);
	li.appendChild(input); */