function show_anketa() {
	document.getElementById('anketa').style.animation = 'show_anketa .7s forwards'
	document.getElementById('anketa').style.display = 'block'
	//document.getElementById('button_anketa').setAttribute('onclick','remove_anketa()')
}
function remove_anketa() {
	document.getElementById('anketa').style.animation = 'remove_anketa .7s forwards'
	//document.getElementById('button_anketa').setAttribute('onclick','show_anketa()')
}

function anketa_preload(){
	try{
		document.getElementById('anketa_age').value = age
	}
	catch (err){
		CONSOLE_ERROR(err)
	}
	var date = new Date()
	document.getElementById('anketa_year').value = date.getFullYear()
	document.getElementById('anketa_day').value = date.getDate()
	document.getElementById('anketa_month').value = (date.getMonth() == 0) ? 'Январь' :
		(date.getMonth() == 1) ? 'Февраля' :
		(date.getMonth() == 2) ? 'Марта' :
		(date.getMonth() == 3) ? 'Апреля' :
		(date.getMonth() == 4) ? 'Мая' :
		(date.getMonth() == 5) ? 'Июня' :
		(date.getMonth() == 6) ? 'Июля' :
		(date.getMonth() == 7) ? 'Августа' :
		(date.getMonth() == 8) ? 'Сентября' :
		(date.getMonth() == 9) ? 'Октября' :
		(date.getMonth() == 10) ? 'Ноября' :
		(date.getMonth() == 11) ? 'Декабря' :
		'NaN'
}
anketa_preload()