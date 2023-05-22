console.log('Dark Mode Enabled')


var icon = document.getElementById('icon');
icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = "../images/greenLight.png";
  } else {
    icon.src = "../images/redDark.png";
  }
}
