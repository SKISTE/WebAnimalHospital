function preload() {
	if (localStorage.getItem('--accent') == null) {
		localStorage.setItem('--accent','#7C7AFF')
		localStorage.setItem('--accent2','#6F8EE8')
		localStorage.setItem('--accent3','#88C5FF')
		localStorage.setItem('--accent4','#6FCDE8')
		localStorage.setItem('--accent5','#7AFFF9')
	}
	else{
		document.documentElement.style.setProperty('--accent', localStorage.getItem('--accent'));
		document.documentElement.style.setProperty('--accent2', localStorage.getItem('--accent2'));
		document.documentElement.style.setProperty('--accent3', localStorage.getItem('--accent3'));
		document.documentElement.style.setProperty('--accent4', localStorage.getItem('--accent4'));
		document.documentElement.style.setProperty('--accent5', localStorage.getItem('--accent5'));
		document.getElementById('color1').value = localStorage.getItem('--accent')
		document.getElementById('color2').value = localStorage.getItem('--accent2')
		document.getElementById('color3').value = localStorage.getItem('--accent3')
		document.getElementById('color4').value = localStorage.getItem('--accent4')
		document.getElementById('color5').value = localStorage.getItem('--accent5')
	}
}
function CONSOLE_ERROR(e) {
	console.error(`${e.name} : ${e.message} : ${e.stack}`)
}
preload()