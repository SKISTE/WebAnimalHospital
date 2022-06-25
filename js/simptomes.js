

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

function AddSimptome(num){
  console.log(simptomes_list[num])
}
function ShowPopup(){
  document.getElementById('Added_simptomes_window').style.opacity = 1
  document.getElementById('Added_simptomes_window').style.display = 'block'
}
function ClosePopup(){
  document.getElementById('Added_simptomes_window').style.opacity = 0
  document.getElementById('Added_simptomes_window').style.display = 'none'
}