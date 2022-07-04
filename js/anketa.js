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
		(date.getMonth() == 1) ? 'Февраль' :
		(date.getMonth() == 2) ? 'Март' :
		(date.getMonth() == 3) ? 'Апрель' :
		(date.getMonth() == 4) ? 'Май' :
		(date.getMonth() == 5) ? 'Июнь' :
		(date.getMonth() == 6) ? 'Июль' :
		(date.getMonth() == 7) ? 'Август' :
		(date.getMonth() == 8) ? 'Сентябрь' :
		(date.getMonth() == 9) ? 'Октябрь' :
		(date.getMonth() == 10) ? 'Ноябрь' :
		(date.getMonth() == 11) ? 'Декабрь' :
		'NaN'
}
anketa_preload()