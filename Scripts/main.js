window.addEventListener(
  "load",
  function () {
    document.body.style.width = "100%";
    document.body.style.height = "100%";
  },
  false
);

function updateClock() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();
  var currentSeconds =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();
  var currentDate =
    currentTime.getDate() < 10
      ? "0" + currentTime.getDate()
      : currentTime.getDate();
  var currentMonth =
    currentTime.getMonth() < 10
      ? "0" + (currentTime.getMonth() + 1)
      : currentTime.getMonth() + 1;
  var currentYear = currentTime.getFullYear();
  timeOfDay = currentHours < 12 ? "am" : "pm";

  if (Clock == "24h") {
    timeOfDay = "";
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentTimeString = currentHours + ":" + currentMinutes;
    document.getElementById("hour").innerHTML = currentHours;
    document.getElementById("minute").innerHTML = currentMinutes;
    document.getElementById("second").innerHTML = currentSeconds;
    document.getElementById("year").innerHTML = currentYear;
    document.getElementById("month").innerHTML = currentMonth;
    document.getElementById("date").innerHTML = currentDate;
  }
  if (Clock == "12h") {
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
    currentHours = currentHours == 0 ? 12 : currentHours;
    currentTimeString = currentHours + ":" + currentMinutes;
    document.getElementById("hour").innerHTML = currentHours;
    document.getElementById("minute").innerHTML = currentMinutes;
    document.getElementById("second").innerHTML = currentSeconds;
  }
}

function wrap_letters($element) {
  for (var i = 0; i < $element.childNodes.length; i++) {
    var $child = $element.childNodes[i];

    if ($child.nodeType === Node.TEXT_NODE) {
      var $wrapper = document.createDocumentFragment();

      for (var i = 0; i < $child.nodeValue.length; i++) {
        var $char = document.createElement("span");
        $char.className = "char";
        $char.textContent = $child.nodeValue.charAt(i);

        $wrapper.appendChild($char);
      }

      $element.replaceChild($wrapper, $child);
    } else if ($child.nodeType === Node.ELEMENT_NODE) {
      wrap_letters($child);
    }
  }
}

function init() {
  updateClock();
  setInterval("updateClock();", 1000);
}

