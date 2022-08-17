var search__query = document.querySelector('.search__query');
var button__search = document.querySelector('.button__search');

button__search.onclick = function () {
  var url = 'https://www.google.by/search?q=' + search__query.value;
  // Открывает в этой же вкладке.
  window.open(url);
  // Открывает в новой вкладке.
  // window.open(url, '_self');
}