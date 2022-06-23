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
}
function Authors() {
  alert('Авторы данного проекта:\nSKISTE - Фронт,бэкэнд\nМарина - Идейный вдохновитель, составитель базы данных');
}

// Close the dropdown menu if the user clicks outside of it
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