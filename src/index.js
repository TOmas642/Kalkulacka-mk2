function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  if (vyraz != [0 - 9])
  for (var i = 0; i < vyraz.length; i++) { }
  document.getElementById("text").innerHTML = "Vysledek je: " + vyraz;
  if (vyraz.get(i) === [0 - 9]){

  }
  else (vyraz.get(i)=== ["+","-","/","*"]){}
}

var input = document.getElementById("vyraz");

input.addEventListener("keyup", function (event) {
  event.preventDefault();

  if (event.keyCode === 13) {
    solveExpression();
  }
});
