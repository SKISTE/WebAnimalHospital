function GoDropdownMenu() {
  var div = document.getElementById('myDropdown');
  div.classList.toggle("show");
}

function GoSomeSettings() {
  document.getElementById('Settings').classList.toggle("show");
}

function EnterValue(name) {
  var div = document.getElementById('AnimalType');
  div.value = name;
  var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}

function Authors() {
  alert('Авторы данного проекта:\nSKISTE - Фронт,бэкэнд\nМарина - Идейный вдохновитель, составитель базы данных');
}

function GoToSimptomes() {
  var type = document.getElementById('AnimalType').value;
  if (type=='Собака'){
    var type = 1;
  }
  else if(type=='Кошка'){
    var type = 2;
  }
  else if(type=='Крупно рогатый скот'){
    var type = 3;
  }
  else if(type=='Мелко рогатый скот'){
    var type = 4;
  }
  else if(type=='Птица'){
    var type = 5;
  }
  else{
    alert('Неправильный тип животного');
    return
  }
  var age = document.getElementById('AnimalAge').value;
  console.log('Type = '+type+'\nAge = '+age);
  window.location.href = 'simptomes.html?type='+type+'&age='+age;
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.Settings')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}