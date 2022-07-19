function preload() {
	document.getElementById('settings_hospital_name').value = localStorage.getItem('settings_hospital_name')
	document.getElementById('settings_hospital_adres').value = localStorage.getItem('settings_hospital_adres')
	document.getElementById('settings_hospital_email').value = localStorage.getItem('settings_hospital_email')
	document.getElementById('settings_hospital_phone').value = localStorage.getItem('settings_hospital_phone')
	document.getElementById('settings_hospital_site').value = localStorage.getItem('settings_hospital_site')
}

function CONSOLE_ERROR(e) {
	console.error(`${e.name} : ${e.message} : ${e.stack}`)
}
preload()