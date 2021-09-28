const mileage = prompt("Сколько пройденно км.?\n(How many miles?)", "");
const consumption = prompt("Какой средний расход на 100км у вашего ТС?\n(What is the average consumption liters per  100 km for your car?)", "21.5");
const remainderOld = prompt("Сколько литров было в баке на начало движения?\n(How many liters was in the tank at the beginning of the movement?)", "");
const fueling = prompt("Сколько заправили литров?\n(How many liters were refilled?)", "0");
const consumptionRHU = prompt("Какой расход у ХОУ?\n(What is the consumption of RHE(Refrigeration and Heating Equipment)?)", "1.8");
const machine_hoursRHU = prompt("Сколько часов работал ХОУ?\n(How many hours did RHE work?)\nЕсли есть! \\ If is!", "0");

const finalBalance = (remainderOld-(mileage*(consumption/100))-(-fueling))-(consumptionRHU*machine_hoursRHU);

document.write("Ваш остаток в баке " + Math.ceil(finalBalance) + " литров <br><br>")
document.write("\"Your remaining balance in the tank " + Math.ceil(finalBalance) + " liters\"")
