
function submit () {
	var input=document.getElementById('tache');
	var checkbox=document.createElement('checkbox');
	checkbox.type='checkbox';
	var li=document.createElement('li');
	texte=document.createElement('label');

	li.appendChild(checkbox);
	li.appendChild(input);

}