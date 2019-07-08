function date() {
  var d = new Date();
  document.getElementById('myDate').innerHTML = d.getFullYear();
}
date();