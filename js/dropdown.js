function GoDropdownMenu() {
  var div = document.getElementById('myDropdown');
  var height = div.style.height
  console.log(height)
  div.classList.toggle("show");
}
function EnterValue(name){
  var div = document.getElementById('AnimalType');
  div.value = name;
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