// console_function.js
// functions

function logHelloWorld() {
  console.log("---------------");
  console.log("Ahoj JS světe!");
}

logHelloWorld();
logHelloWorld();
logHelloWorld();
logHelloWorld();
logHelloWorld();

logText("Jsem nad funkcí!");

function logText(textParameter) {
  // ? parametry používáme jako jiné proměnné
  console.log(`20.03.2025 18:15 [INFO] ${textParameter}`);
}

logText("Programujeme v JavaScriptu!");
// ? Parametr vs argument
// parametr je "proměnná" funkce a argument do ní přiřazujeme
// logText("argument"); uvnitř funkce se děje: textParameter = "argument"
const argument = "Playwright je boží!";
logText(argument);
