(function(u, e, t) {

  u = window.location.href;
  e = document.getElementById("js-heading");

  if (u.includes("producthunt")) {
    t = e.innerHTML.replace("Emoji Lover", "Product Hunter");
    e.innerHTML = t;
  };

})();
