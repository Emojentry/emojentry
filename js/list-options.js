// List.js
var emojiList = new List("emoji-list", {
  plugins: [ ListFuzzySearch() ],
  valueNames: [ "name", "html", "hex", { data: ["group"] } ]
});

// Filter Buttons
var btns = document.querySelectorAll("#js-filter li");
for (i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    var group = this.dataset.group;
    emojiList.filter(function(item) {
      if (item.values().group == group) {
        return true;
      } else {
        return false;
      }
    });
    if (group == "all") {
      emojiList.filter();
    }
  }
}
