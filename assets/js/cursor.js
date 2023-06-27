document.addEventListener('mousemove', function(e) {
  var cursorEffect = document.querySelector('.cursor-effect');
  var x = e.clientX;
  var y = e.clientY;
  cursorEffect.style.top = y + 'px';
  cursorEffect.style.left = x + 'px';
});

document.addEventListener('mouseover', function(e) {
  var cursorEffect = document.querySelector('.cursor-effect');
  cursorEffect.classList.add('show');
});

document.addEventListener('mouseout', function(e) {
  var cursorEffect = document.querySelector('.cursor-effect');
  cursorEffect.classList.remove('show');
});
