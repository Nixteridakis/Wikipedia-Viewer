function searchToggle(obj, evt) {
  var container = $(obj).closest(".search-wrapper");
  if (!container.hasClass("active")) {
    container.addClass("active");
    evt.preventDefault();
  } else if (
    container.hasClass("active") &&
    $(obj).closest(".input-holder").length == 0
  ) {
    container.removeClass("active");
    for (i = 0; i < 10; i++) {
      var linkVar = document.getElementById("links");
      linkVar.remove();
    }
    container.find(".search-input").val("");
  }
}

$(".searchToggle");

function runScript(e) {
  if (e.keyCode == 13) {
    var valText = document.getElementById("fetch").value;
    gettingApi(valText);
     for (i = 0; i < 10; i++)
    {var linkVar = document.getElementById("links");
      linkVar.remove();
    }
  }
}

function runScript2() {
  var valText2 = document.getElementById("fetch").value;
  gettingApi(valText2);
   for (i = 0; i < 10; i++)
    {var linkVar = document.getElementById("links");
      linkVar.remove();
    }
}

function gettingApi(word) {
  if (word == null || word == "") {
  } else {
    $.getJSON(
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        word +
        "&format=json&callback=?",
      function(data) {
        for (i = 0; i < 10; i++) {
          var a = document.createElement("a");
          a.target = "_blank";
          a.href = "" + data[3][i] + "";
          var newDiv = document.createElement("div");
          newDiv.className = "block";
          var heading = document.createElement("h2");
          var newContent = document.createTextNode(data[1][i]);
          heading.className = "title";
          heading.appendChild(newContent);
          newDiv.appendChild(heading);
          var paragraph = document.createElement("p");
          var newContent2 = document.createTextNode(data[2][i]);
          paragraph.className = "paraStyle";
          paragraph.appendChild(newContent2);
          newDiv.appendChild(paragraph);
          a.id = "links";
          a.appendChild(newDiv);
          var currentDiv; /*document.getElementById("div1"); */
          document.body.insertBefore(a, currentDiv);
        }
      }
    );
  }
}

function random(){
  window.open("https://en.wikipedia.org/wiki/Special:Random")
  
}