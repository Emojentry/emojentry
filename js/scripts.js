---
---
// Product Hunt
var u = window.location.href;
var h = document.querySelector("#js-heading");
var n = document.querySelector(".header-nav");

if (u.includes("producthunt")) {
  var t = h.innerHTML.replace("Emoji Lover", "<a href='{{ site.links.ph }}' target='_blank'>Product Hunter</a>");
  h.innerHTML = t;
};

// List.js
var emojiList = new List("emoji-list", {
  valueNames: [ "name", "html", "hex", { data: ["group"] } ]
});

// Filter Buttons
var filBtns = document.querySelectorAll("#js-filter li");
for (i = 0; i < filBtns.length; i++) {
  filBtns[i].onclick = function() {
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

// Copy to Clipboard
var copBtns = document.querySelectorAll(".item-copy");
for (i = 0; i < copBtns.length; i++) {
  copBtns[i].onclick = function() {
    var el = this;
    var copyEmoji = this.dataset.copy;

    clipboard.copy(copyEmoji);
    el.setAttribute("data-tooltip", "Copied!");
    setTimeout(function(){
      el.setAttribute("data-tooltip", "Copy");
    }, 1500);
  }
}

// AutoSelect
var codes = document.querySelectorAll(".list-item-code code");
for (i = 0; i < codes.length; i++) {
  codes[i].onclick = function(el) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(this);
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(this);
        window.getSelection().addRange(range);
    }
  }
}
