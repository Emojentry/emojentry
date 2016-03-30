// var options = {
//   valueNames: [ "emoji", "name", "html", "hex" ]
// };
// var userList = new List("emoji-list", options);

// List.js
var options = {
  valueNames: [ "emoji", "name", "html", "hex", "group" ]
};

var emojiList = new List("emoji-list", options);

// Buttons
var buttons = document.querySelectorAll("#js-filter li")

for (i = 0; i < buttons.length; i++) {

  var button = buttons[i];

  button.onclick = function () {

    var num = this.dataset.group;

    console.log(num);

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
