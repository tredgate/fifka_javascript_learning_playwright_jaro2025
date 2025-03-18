const actualPoints = 75;
const studentName = "Petr Fifka";
const successPointsLimit = 75;

if (actualPoints >= 75) {
  console.log(`Student/ka ${studentName} prospěl/a s ${actualPoints} body.`);
} else {
  console.log(
    `Student/ka ${studentName} neprospěl/a s ${actualPoints} body, chybělo mu/jí ${
      successPointsLimit - actualPoints
    } bodů.`
  );
}

/*
Git commit postup:
git add . 
git commit -m "zpráva"
git pull
git push
*/

// Příprava na hodinu (⌛3:00)
// Přepněte se do main branch v Git
// Pullněte
// Vytvořte novou branch javascript_learning_2
// Ve složce javascript_learning ve VS Code projektu vytvoř novou složku cycles
