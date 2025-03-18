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
