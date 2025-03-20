// constant_function.js
logText("Jsem nad funkcí!"); // ! TOTO nebude fungovat
// ? Toto je konstantní funkce, která se skládá z konstanty a šipkové (arrow) funkce
const logText = (textParameter) => {
  // ? Parametry jakoby šipkou posíláme do bloku kódu
  console.log(`20.03.2025 18:15 [INFO] ${textParameter}`);
};

logText("Programujeme v JavaScriptu!");
const argument = "Playwright je boží!";
logText(argument);
/*
Vytvoř jednoduchou kalkulačku pomocí funkcí. Zvol function nebo constant function. Složka: javascript/exercises, název souboru: calculator.js
Vytvoř 4 funkce: add, subtract, multiply, divide, které budou mít 2 parametry (2 čísla)
Funkce také zapíší výsledek do konzole.
Vytvoř volání:
add: 15+48
subtract: 98-41
multiply: 54*30
divide: 88/6

*/
