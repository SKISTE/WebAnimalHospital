var input = document.getElementById('Simptomes_textarea');
function updatesimptomes() {
  for (var i = document.getElementsByClassName('simptome').length - 1; i >= 0; i--) {
    var tag = document.getElementsByClassName('simptome')[i].innerHTML.toLowerCase()
    if (tag.indexOf(input.value.toLowerCase())){
      document.getElementsByClassName('simptome')[i].classList.add('simptomes_shown')
    }
    else{
      document.getElementsByClassName('simptome')[i].classList.remove('simptomes_shown')
    }
    
  }
}
input.oninput = updatesimptomes;

function get_added_ids() {
  return `${document.getElementById('added_simptomes_id').innerHTML}`
}

function print(txt){
  console.log(txt)
}
function ShowPopupMessage(text) {
  var div = document.createElement('div')
  var div1 = document.createElement('div')
  var p = document.createElement('p')

  div.classList.add('popup_message')
  div1.classList.add('popup_dur')
  p.classList.add('popup_text')

  div.style.zIndex = 1000

  p.innerHTML = text

  div.setAttribute('onclick','RemoveAllPopupMessages()')

  div.prepend(div1)
  div.prepend(p)
  document.body.prepend(div)

  setTimeout(
    () => {
      div.remove()
    },
    2000
  );
}

function RemoveAllPopupMessages(){
  var div = document.getElementsByClassName('popup_message')
  for (var i = div.length - 1; i >= 0; i--) {
    div[i].style.animation = 'RemovePopup .4s ease-in-out forwards'
  }
}

function AddSimptome(num){

  var div = document.getElementById('added_simptomes_id')
  var added_simptomes = div.innerHTML.split(',')
  if (added_simptomes[0] == ""){
    added_simptomes.pop()
  }
  added_simptomes.push(num.toString())
  div.innerHTML = added_simptomes.toString()

  var div = document.getElementById('spisok_blyat')

  let tag1 = document.createElement('div')
  let tag2 = document.createElement('div')
  let tag3 = document.createElement('ion-icon')

  tag1.classList.add('block_with_simptome')
  tag2.classList.add('text_for_added_simptome')
  tag3.classList.add('button_for_remove')

  tag3.setAttribute('name','close-circle-outline')
  tag3.setAttribute('onclick','RemoveSimptome('+num+')')

  tag2.innerHTML = simptomes_list[num]

  tag1.prepend(tag3)
  tag1.prepend(tag2)
  div.prepend(tag1)
  for (var i = document.getElementsByClassName('simptome').length - 1; i >= 0; i--) {
    var div = document.getElementsByClassName('simptome')[i]
    if (div.innerHTML==simptomes_list[num]){
      div.remove()
    }
  }
  document.getElementById('Simptomes_textarea').value = ''
  updatesimptomes()
  ShowPopupMessage('Добавлен симптом "'+simptomes_list[num]+'"')
  CheckBolezni()
}
function RemoveSimptome(num) {
  var div = document.getElementsByClassName('block_with_simptome')
  for (var i = div.length - 1; i >= 0; i--) {
    let temp = div[i].getElementsByClassName('text_for_added_simptome')[0].innerHTML
    if (temp == simptomes_list[num]) {
      ShowPopupMessage('Удален симптом "'+temp+'"')
      div[i].remove()
      var div = document.createElement('div')
      div.innerHTML = simptomes_list[num]
      div.setAttribute('onclick','AddSimptome('+num+')')
      div.classList.add('simptome')
      document.getElementById('list_simptomes').prepend(div)
    }
  }
  var div = document.getElementById('added_simptomes_id')
  var temp = div.innerHTML.split(',')
  var temp1 = temp.indexOf(num.toString())
  if (temp.length > 1){
    temp.splice(temp1,temp1)
  }
  else{
    temp = []
  }
  div.innerHTML = temp.toString()
  CheckBolezni()
}
function ShowPopup(){
  //document.getElementById('Added_simptomes_window').style.opacity = 1
  document.getElementById('Added_simptomes_window').style.animation = 'slideuptocenter .4s ease-in-out forwards'
  document.getElementById('Added_simptomes_window').style.display = 'block'

}
function ClosePopup(){
  //document.getElementById('Added_simptomes_window').style.display = 'none'
  document.getElementById('Added_simptomes_window').style.animation = 'slidecentertoup .4s ease-in-out forwards'
}
  

function CloseInfoWindow(){
  document.getElementById('Info_window').style.animation='slidecentertoup .4s ease-in-out forwards'
}

function GoInfoWindow(num){
  document.getElementById('Info_header_name').innerHTML = bolezni_list[type][num].name
  document.getElementById('info_text').innerHTML = bolezni_list[type][num].desc
  document.getElementById('Info_window').style.animation = 'slideuptocenter .4s ease-in-out'
  document.getElementById('Info_window').style.display = 'block'
}

function CreatePointForListBoleznei(num){
  var finded_block = document.getElementById('bolezni_list')

  let div1 = document.createElement('div')
  let div2 = document.createElement('div')
  let div2_1 = document.createElement('div')
  let div2_2 = document.createElement('div')
  let ionicon = document.createElement('ion-icon')

  div1.classList.add('block_with_bolezn')
  div2.classList.add('text_bolezn')
  div2_1.classList.add('bolezn_name')
  div2_2.classList.add('bolezn_simptomes')
  ionicon.classList.add('bolezn_info')

  ionicon.setAttribute('onclick',`GoInfoWindow(${num})`)
  ionicon.setAttribute('name','help-circle-outline')

  var tmp = new String()
  var tmp1 = 0
  for (var i = bolezni_list[type][num].simptomes.length - 1; i >= 0; i--) {
    if(tmp1 < 4){
      tmp = tmp + simptomes_list[bolezni_list[type][num].simptomes[i]]+','
      tmp1 = tmp1 + 1
    }
    else{
      tmp = tmp + '...'
      break
    }
  }

  div2_1.innerHTML = bolezni_list[type][num].name
  div2_2.innerHTML = tmp

  div2.prepend(div2_2)
  div2.prepend(div2_1)
  div1.prepend(ionicon)
  div1.prepend(div2)
  finded_block.prepend(div1)

}

for (var i = Object.keys(simptomes_list).length - 1; i >= 0; i--) {
  let div = document.getElementById('list_simptomes')
  let liFirst = document.createElement('div');
  liFirst.innerHTML = simptomes_list[i+1];
  liFirst.classList.add('simptome')
  liFirst.setAttribute('onclick','AddSimptome('+(i+1)+')') 
  div.prepend(liFirst);
}

function ClearBolezniList(){
  var finded = document.getElementsByClassName('block_with_bolezn')
  for (var i = finded.length - 1; i >= 0; i--) {
    finded[i].remove()
  }
}

function CheckBolezni() {
  console.time()
  ClearBolezniList()
  let temparray = document.getElementById('added_simptomes_id').innerHTML.split(',');
  for (var i = Object.keys(bolezni_list[type]).length - 1; i >= 0; i--) {
    let intersection = temparray.filter((x) => !bolezni_list[type][i+1]['simptomes'].includes(x));
    if (intersection == ![]) {
      CreatePointForListBoleznei(i+1)
    }
  }
  console.timeEnd()
}

function OpenBolezniList(){
  document.getElementById('block_with_list_bolezni').style.animation = 'unpack_bolezni .4s ease-in-out forwards';
  document.getElementById('button_for_close_open_bolezni').setAttribute('onclick','CloseBolezniList()');
}
function CloseBolezniList(){
  document.getElementById('block_with_list_bolezni').style.animation = 'pack_bolezni .4s ease-in-out forwards';
  document.getElementById('button_for_close_open_bolezni').setAttribute('onclick','OpenBolezniList()');
}


var tmp = new Array();
var tmp2 = new Array();
var param = new Array();

var get = location.search;
if(get != '') {
    tmp = (get.substr(1)).split('&');
    for(var i=0; i < tmp.length; i++) {
        tmp2 = tmp[i].split('=');
        param[tmp2[0]] = tmp2[1];
    }
}
var type = Number(param['type']);
const age = param['age'];
console.log(`Обрабатываем животного - "${type}", возрастом - ${age}`);
var tmp11 = document.getElementById('header_name')
console.log()
tmp11.innerHTML = (type == 1) ? 'Собака' :
  (type == 2) ? 'Кошка' :
  (type == 3) ? 'Крупно рогатый скот' :
  (type == 4) ? 'Мелко рогатый скот' :
  (type == 5) ? 'Птица' :
  'Карманная вет.клиника'