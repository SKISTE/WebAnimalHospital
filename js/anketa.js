function show_anketa() {
	document.getElementById('anketa').style.animation = 'show_anketa .7s forwards'
	document.getElementById('anketa').style.display = 'block'
	//document.getElementById('button_anketa').setAttribute('onclick','remove_anketa()')
}
function remove_anketa() {
	document.getElementById('anketa').style.animation = 'remove_anketa .7s forwards'
	//document.getElementById('button_anketa').setAttribute('onclick','show_anketa()')
}