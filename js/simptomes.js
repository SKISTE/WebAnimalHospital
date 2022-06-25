

var input = document.getElementById('Simptomes_textarea');
input.oninput = function() {
    for (var i = document.getElementsByClassName('simptome').length - 1; i >= 0; i--) {
      var tag = document.getElementsByClassName('simptome')[i].innerHTML.toLowerCase()
      if (tag.indexOf(input.value.toLowerCase())){
        document.getElementsByClassName('simptome')[i].classList.add('simptomes_shown')
      }
      else{
        document.getElementsByClassName('simptome')[i].classList.remove('simptomes_shown')
      }
      
    }
  };

function get_added_ids() {
  print(document.getElementById('added_simptomes_id').innerHTML)
}

function print(txt){
  console.log(txt)
}

function AddSimptome(num){
  var div = document.getElementById('added_simptomes_id')
  let temp = div.innerHTML.split(' ')
  if (temp.includes(num.toString())) {
    alert('Данный симптом уже имеется')
  }
  else{
    div.innerHTML = div.innerHTML+num+' '
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
  }
}
function RemoveSimptome(num) {
  var div = document.getElementsByClassName('block_with_simptome')
  for (var i = div.length - 1; i >= 0; i--) {
    let temp = div[i].getElementsByClassName('text_for_added_simptome')[0].innerHTML
    if (temp == simptomes_list[num]) {
      div[i].remove()
    }
  }
  var div = document.getElementById('added_simptomes_id')
  var temp = div.innerHTML.split(' ')
  print(temp)
  var temp1 = temp.indexOf(num.toString())
  print(temp1)
  temp.splice(temp1,temp1)
  div.innerHTML = ''
  print(temp)
  for (var i = temp.length - 1; i >= 0; i--) {
    div.innerHTML = div.innerHTML+' '+temp[i]
    print(div.innerHTML)
  }
}
function ShowPopup(){
  document.getElementById('Added_simptomes_window').style.opacity = 1
  document.getElementById('Added_simptomes_window').style.display = 'block'
}
function ClosePopup(){
  document.getElementById('Added_simptomes_window').style.opacity = 0
  document.getElementById('Added_simptomes_window').style.display = 'none'
}
for (var i = Object.keys(simptomes_list).length - 1; i >= 0; i--) {
  let div = document.getElementById('list_simptomes')
  let liFirst = document.createElement('div');
  liFirst.innerHTML = simptomes_list[i+1];
  liFirst.classList.add('simptome')
  liFirst.setAttribute('onclick','AddSimptome('+(i+1)+')') 
  div.prepend(liFirst);
}