(function () {
  var splash = document.getElementById('etx-splash');
  var root = document.documentElement;
  if (!splash || root.classList.contains('etx-skip')) { if (splash) splash.remove(); return; }

  var MIN_TIME = 3600;   // ms the splash stays at minimum (lets the intro animation play)
  var MAX_TIME = 8000;   // safety net: never block the site longer than this
  var start = Date.now(), done = false;

  function hide() {
    if (done) return; done = true;
    var wait = Math.max(0, MIN_TIME - (Date.now() - start));
    setTimeout(function () {
      splash.classList.add('etx-hide');
      root.classList.remove('etx-lock');
      try { sessionStorage.setItem('etxSplash', '1'); } catch (e) {}
      setTimeout(function () { splash.remove(); }, 800);
    }, wait);
  }

  if (document.readyState === 'complete') hide();
  else window.addEventListener('load', hide);
  setTimeout(hide, MAX_TIME);
})();
