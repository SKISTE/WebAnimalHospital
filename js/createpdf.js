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
	anketa_doctor = document.getElementById('anketa_doctor').value
	anketa_hospital = document.getElementById('anketa_hospital').value
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
	console.log('anketa_doctor: '+anketa_doctor)
	console.log('anketa_hospital: '+anketa_hospital)
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
			bg:'https://i.imgur.com/qnGFvc7.png'
		},
		pageOrientation:'portrait',
		pageMargins:[40,25,40,0],
		background: {
			image: 'bg',
			width: 595,
		},
		

		content: [
		{
			text: anketa_hospital,
			fontSize: 20,
			alignment: 'left',
			color:'#ffffff',
			margin: [50,0],
			lineHeight:1.4
		},
		{
			text: 'Карта пациента',
			fontSize: 30,
			alignment: 'center',
			margin:[0,50],
			lineHeight:.1
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
		{
			columns:[
				{
					text:'ФИО врача:',
					width:150,
					style: 'name',
				},
				{
					text:anketa_doctor,
					style:'value',
					width:'*',
					alignment:'right: '
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