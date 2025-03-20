import { CarBlueprint } from "./car_blueprint.mjs";

new CarBlueprint("Červená", "1.6 TDI", "Diesel", "Dieselák").logCarProperties(); // ? Provolání metody přímo po constructoru.

const petrolCar = new CarBlueprint("Zelená", "Brm brm", "benzín", "Autíčko");
petrolCar.logCarProperties();
petrolCar.logDivider();
petrolCar.logCarProperties();

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");

electricCar.logCarProperties();
petrolCar.logCarProperties();

electricCar.repaint("Růžová");
electricCar.logCarProperties();
petrolCar.logCarProperties();

const electricCar2 = electricCar;

electricCar2.repaint("Hnědá");
electricCar.logCarProperties(); // ? Jakou má electricCar barvu? Je to růžová (palec nahoru) nebo hnědá (palec dolů)

const electricCarColor = electricCar.getColor();
console.log(`Barva blesku: ${electricCarColor}`);
