function OpenSettingsMenu(){
    document.getElementById('SettingsMenu').style.display = 'block'
    document.getElementById('SettingsMenu').style.animation = 'open_settings .5s linear forwards'
    document.getElementById('settings_hospital_name').value = localStorage.getItem('settings_hospital_name')
	document.getElementById('settings_hospital_adres').value = localStorage.getItem('settings_hospital_adres')
	document.getElementById('settings_hospital_email').value = localStorage.getItem('settings_hospital_email')
	document.getElementById('settings_hospital_phone').value = localStorage.getItem('settings_hospital_phone')
	document.getElementById('settings_hospital_site').value = localStorage.getItem('settings_hospital_site')
}
function CloseSettingsMenu(){
    document.getElementById('SettingsMenu').style.animation = 'close_settings .5s linear forwards'
    setTimeout(function(){document.getElementById('SettingsMenu').style.display = 'none'},500)
}
function SaveSettings() {
    localStorage.setItem('settings_hospital_name',document.getElementById('settings_hospital_name').value)
    localStorage.setItem('settings_hospital_adres',document.getElementById('settings_hospital_adres').value)
    localStorage.setItem('settings_hospital_email',document.getElementById('settings_hospital_email').value)
    localStorage.setItem('settings_hospital_phone',document.getElementById('settings_hospital_phone').value)
    localStorage.setItem('settings_hospital_site',document.getElementById('settings_hospital_site').value)
    localStorage.setItem('--accent',document.getElementById('color1').value)
    localStorage.setItem('--accent2',document.getElementById('color2').value)
    localStorage.setItem('--accent3',document.getElementById('color3').value)
    localStorage.setItem('--accent4',document.getElementById('color4').value)
    localStorage.setItem('--accent5',document.getElementById('color5').value)
    //ShowPopupMessage('Сохранено!')
    ShowPopupMessage(document.getElementById('color1').value+'\n'+document.getElementById('color2').value+'\n'+document.getElementById('color3').value+'\n'+document.getElementById('color4').value+'\n'+document.getElementById('color5').value)
    
}
function RestartColor() {
    localStorage.setItem('--accent','#7C7AFF')
	localStorage.setItem('--accent2','#6F8EE8')
	localStorage.setItem('--accent3','#88C5FF')
	localStorage.setItem('--accent4','#6FCDE8')
	localStorage.setItem('--accent5','#7AFFF9')
    document.getElementById('color1').value = localStorage.getItem('--accent')
	document.getElementById('color2').value = localStorage.getItem('--accent2')
	document.getElementById('color3').value = localStorage.getItem('--accent3')
	document.getElementById('color4').value = localStorage.getItem('--accent4')
	document.getElementById('color5').value = localStorage.getItem('--accent5')
}