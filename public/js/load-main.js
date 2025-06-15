// load-main.js
// Ensures browsers always fetch the latest main.js by appending a timestamp
(function () {
  const s = document.createElement('script');
  s.src = '/js/main.js?v=' + Date.now();
  s.defer = true;
  document.head.appendChild(s);
})(); 