// složka: javascript/objects
// cars.js
// car_blueprint.js

export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4;
    this.logDivider();
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel}\n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    ); // Escape Characters: \n, vypsání uvozovek v textu: "Petr řekl \"Budiž Escape Characters\""
  }

  logCarProperties() {
    this.logDivider();
    console.log(
      `Informace o autě: ${this.carName}: \n\t motor: ${this.engine}, palivo: ${this.fuel}, barva: ${this.color}, počet kol: ${this.wheels}`
    );
  }

  logDivider() {
    console.log("-----------------");
  }

  repaint(newColor) {
    this.logDivider();
    console.log(
      `Auto ${this.carName} bylo přebarveno z ${this.color} na ${newColor}`
    );
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}
