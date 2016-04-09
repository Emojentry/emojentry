// List.js
var emojiList = new List("emoji-list", {
  plugins: [ ListFuzzySearch() ],
  valueNames: [ "emoji", "name", "html", "hex", "group" ]
});

// Filter Buttons
var buttons = document.querySelectorAll("#js-filter li");
for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    var num = this.dataset.group;
    emojiList.filter(function(item) {
      if (item.values().group == num) {
        return true;
      } else {
        return false;
      }
    });
    if (num == "all") {
      emojiList.filter();
    }
  }
}
