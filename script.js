//code challenge 1

/* var fahadMass = 76;
var fahadHeight = 1.7;
var faisalMass = 72;
var faisalHeight = 1.73;

var fahadBmi = fahadMass / (fahadHeight * fahadHeight);
console.log("Fahad BMI: " + fahadBmi);
var faisalBmi = faisalMass / (faisalHeight * faisalHeight);
console.log("Fiasal BMI: " + faisalBmi);

var check = fahadBmi > faisalBmi;
console.log(check);

console.log("is Fahad's BMI greater than Faisal?" + " " + check);

//with if else
if (fahadBmi < faisalBmi) {
  console.log("faisal is fit");
} else {
  console.log("fahad is fit");
} */

// code challenge 2

/* var johnMatch1, johnMatch2, johnMatch3;

johnMatch1 = 120;
johnMatch2 = 120;
johnMatch3 = 120;

var johnMatchAvg = (johnMatch1 + johnMatch2 + johnMatch3) / 3;
console.log("john's avrage: " + johnMatchAvg);

var mikeMatch1, mikeMatch2, mikeMatch3;

mikeMatch1 = 120;
mikeMatch2 = 120;
mikeMatch3 = 120;

var mikeMatchAvg = (mikeMatch1 + mikeMatch2 + mikeMatch3) / 3;
console.log("mike's average: " + mikeMatchAvg);

var marryMatch1, marryMatch2, marryMatch3;

marryMatch1 = 120;
marryMatch2 = 120;
marryMatch3 = 120;

var marryMatchAvg = (marryMatch1 + marryMatch2 + marryMatch3) / 3;
console.log("marry's average: " + marryMatchAvg);

if (johnMatchAvg > mikeMatchAvg && johnMatchAvg > marryMatchAvg) {
  console.log(
    "John's team wins the match with an average score: " + johnMatchAvg
  );
} else if (mikeMatchAvg > johnMatchAvg && mikeMatchAvg > marryMatchAvg) {
  console.log(
    "Mikes team wins the match with an average score: " + mikeMatchAvg
  );
} else if (marryMatchAvg > johnMatchAvg && marryMatchAvg > mikeMatchAvg) {
  console.log(
    "marry's team wins the match with an average score " + marryMatchAvg
  );
} else {
  console.log("The match is tied!!!");
}

// var score = (120 + 120 + 120) / 3; */

//code challenge 3

var tipCalculator = function(bill) {
  var tipAmount;
  if (bill < 50) {
    tipAmount = 0.2;
  } else if (bill >= 50 && bill < 200) {
    tipAmount = 0.15;
  } else {
    tipAmount = 0.1;
  }
  return tipAmount * bill;
};

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];
console.log(tips);

var totalValue = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalValue);
