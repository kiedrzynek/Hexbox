function changeColor() {
    var body = document.getElementsByTagName("body")[0];
    var input = document.getElementById("color-input");
    var inputText = input.value;
    if (isHex(inputText)) {
        body.setAttribute("style", "background-color: #" + inputText +";");
    }
}

function isHex(hex) {
  var pattern = new RegExp("^[0-9A-Fa-f]{6}$");
  var result = pattern.test(hex);
  
  return result;
}