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
    ShowPopupMessage('Сохранено!')
}