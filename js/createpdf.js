console.log('createpdf.js loaded')
function generate_pdf(){
	anketa_fio = document.getElementById('anketa_fio').value
	anketa_day = document.getElementById('anketa_day').value
	anketa_month = document.getElementById('anketa_month').value
	anketa_year = document.getElementById('anketa_year').value
	anketa_adres = document.getElementById('anketa_adres').value
	anketa_animalname = document.getElementById('anketa_animalname').value
	anketa_age = document.getElementById('anketa_age').value
	anketa_sex = document.getElementById('anketa_sex').value
	anketa_poroda = document.getElementById('anketa_poroda').value
	settings_hospital_name = localStorage.getItem('settings_hospital_name')
	settings_hospital_adres = localStorage.getItem('settings_hospital_adres')
	settings_hospital_email = localStorage.getItem('settings_hospital_email')
	settings_hospital_phone = localStorage.getItem('settings_hospital_phone')
	settings_hospital_site = localStorage.getItem('settings_hospital_site')
	console.groupCollapsed('generate_pdf info')
	console.log('anketa_fio: '+anketa_fio)
	console.log('anketa_day: '+anketa_day)
	console.log('anketa_month: '+anketa_month)
	console.log('anketa_year: '+anketa_year)
	console.log('anketa_adres: '+anketa_adres)
	console.log('anketa_animalname: '+anketa_animalname)
	console.log('anketa_age: '+anketa_age)
	console.log('anketa_sex: '+anketa_sex)
	console.log('anketa_poroda: '+anketa_poroda)
	console.log('settings_hospital_name: '+settings_hospital_name)
	console.log('settings_hospital_adres: '+settings_hospital_adres)
	console.log('settings_hospital_email: '+settings_hospital_email)
	console.log('settings_hospital_phone: '+settings_hospital_phone)
	console.log('settings_hospital_site: '+settings_hospital_site)
	console.groupEnd()
	createPdf()
}
function generate_simptomes(){
	temp = ''
	tempids = document.getElementById('added_simptomes_id').innerHTML.split(',')
	for (var i = tempids.length - 1; i >= 0; i--) {
		if (i != 0){
			temp = temp + simptomes_list[Number(tempids[i])] + ', '
		}
		else{
			temp = temp + simptomes_list[Number(tempids[i])]
		}
	}
	if (temp == 'undefined'){
		return 'Нету жалоб'
	}
	return temp
}

function createPdf() {
	var docInfo = {
		
		info: {
			title:'Карта пациента',
			author:'Карманная вет.клиника',
			subject:'',
			keywords:''
		},
		
		pageSize:'A4',
		images:{
			bg:'https://i.imgur.com/KeXQAYi.jpg'
		},
		pageOrientation:'portrait',
		pageMargins:[40,10,40,0],
		background: {
			image: 'bg',
			width: 595,
		},
		

		content: [
		{
			text: settings_hospital_name,
			fontSize: 18,
			alignment: 'center',
			color:'#ffffff',
			lineHeight:1.4
		},
		{
			text: "Адрес: "+settings_hospital_adres,
			fontSize:13,
			alignment:'left',
			color:'#ffffff',
			lineHeight:1
		},
		{
			text: "E-mail: "+settings_hospital_email,
			fontSize:13,
			alignment:'left',
			color:'#ffffff',
			lineHeight:1
		},
		{
			text: "Телефон: "+settings_hospital_phone,
			fontSize:13,
			alignment:'left',
			color:'#ffffff',
			lineHeight:1
		},
		{
			text: "Сайт: "+settings_hospital_site,
			fontSize:13,
			alignment:'left',
			color:'#ffffff',
			lineHeight:1
		},
		{
			text: 'Лист назначения',
			fontSize: 18,
			alignment: 'center',
			margin:[0,40],
			lineHeight:.01
		},
		{
			columns: [
				{
					width: 150,
					text: 'Дата приема:',
					style: 'name'
				},
				{
					// star-sized columns fill the remaining space
					// if there's more than one star-column, available width is divided equally
					width: '*',
					text: anketa_day+' '+anketa_month+' '+anketa_year,
					style:'value',
					decoration:'',
				},
			],
		},
		{
			columns: [
				{
					width: 150,
					text: 'Владелец:',
					style: 'name'
				},
				{
					// star-sized columns fill the remaining space
					// if there's more than one star-column, available width is divided equally
					width: '*',
					text: anketa_fio,
					style:'value'
				},
			],
		},
		{
			columns: [
				{
					width: 150,
					text: 'Адрес проживания:',
					style: 'name'
				},
				{
					// star-sized columns fill the remaining space
					// if there's more than one star-column, available width is divided equally
					width: '*',
					text: anketa_adres,
					style:'value'
				},
			],
		},
		{
			columns: [
				{
					width: 150,
					text: 'Кличка животного:',
					style: 'name'
				},
				{
					// star-sized columns fill the remaining space
					// if there's more than one star-column, available width is divided equally
					width: '*',
					text: anketa_animalname,
					style:'value'
				},
			],
		},
		{
			columns:[
				{
					text:'Пол:',
					width:'auto',
					style: 'name',
				},
				{
					text:anketa_sex,
					style:'value',
					width:'5%',
					alignment:'center',
				},
				{
					text:'Возраст:',
					style: 'name',
					width:'15%',
					alignment:'center'
				},
				{
					text:anketa_age,
					width:'5%',
					style:'value'
				},
				{
					text:'Порода: ',
					width:'12%',
					style: 'name',
				},
				{
					text:anketa_poroda,
					width:'*',
					style:'value'
				},
		]},
		{
			columns:[
				{
					text:'Жалобы:',
					width:150,
					style: 'name',
				},
				{
					text:generate_simptomes(),
					style:'value',
					width:'*',
				},
		]},
		{
			columns:[
				{
					text:'Диагноз:',
					width:150,
					style: 'name',
				},
				{
					text:'Ну здесь будет диагоз, пока хз как его нужно будет сделать',
					style:'value',
					width:'*',
				},
		]},
	],
		styles:{
			name:{
				lineHeight:1.2,
				fontSize:15,
				color:'#555555', 
			},
			value:{
				fontSize:15,
				decoration:'underline',
				alignment:'left'
			}
		}
	}
	pdfMake.createPdf(docInfo).print();
}