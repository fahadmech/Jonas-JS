/*===============================
// coding challenge 1
================================*/

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

/*===============================
// coding challenge 2
================================*/

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

/*===============================
// coding challenge 3
================================*/

/*var tipCalculator = function(bill) {
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
console.log(totalValue); */

/*// practice
var person = {
  firstName: "fahad",
  lastName: "shaikh",
  birthyear: 1990,
  calcage: function() {
    this.age = 2019 - this.birthyear;
  }
};

person.calcage();
console.log(person); */

/*===============================
// coding challenge 4
================================*/

/*//my solution
var john = {
  fullName: "John Miller",
  mass: 90,
  height: 2.2,
  BmiCalc: function() {
    return this.mass / (this.height * this.height);
  }
};

console.log(john.BmiCalc());
john.Bmi = john.BmiCalc();
console.log(john);

var mike = {
  fullName: "Mike Paul",
  mass: 90,
  height: 2.2,
  BmiCalc: function() {
    return this.mass / (this.height * this.height);
  }
};

console.log(mike.BmiCalc());
mike.Bmi = mike.BmiCalc();
console.log(mike);

if (john.Bmi > mike.Bmi) {
  console.log(john.fullName + " has higher BMI of " + john.Bmi);
} else if (john.Bmi < mike.Bmi) {
  console.log(mike.fullName + " has higher BMI of " + mike.Bmi);
} else {
  console.log("Both have same BMI");
}*/

//jonas solution
/*var john = {
  fullName: "John Miller",
  mass: 80,
  height: 2.2,
  BmiCalc: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mike = {
  fullName: "Mike Paul",
  mass: 90,
  height: 2.2,
  BmiCalc: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

if (john.BmiCalc() > mike.BmiCalc()) {
  console.log(john.fullName + " has higher BMI of " + john.bmi);
} else if (john.bmi < mike.bmi) {
  console.log(mike.fullName + " has higher BMI of " + mike.bmi);
} else {
  console.log("Both have same BMI");
}*/

/*===============================
// coding challenge 5
================================*/

//Farhan Bhai Solution
/* var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  tipAmounts: [],
  totalAmounts: [],
  tipCalc: function() {
    for (var i = 0; i < john.bills.length; i++) {
      var bill = john.bills[i];
      var tipPercent;
      if (bill < 50) {
        tipPercent = 0.2;
      } else if (bill >= 50 && bill < 200) {
        tipPercent = 0.15;
      } else {
        tipPercent = 0.1;
      }
      var tipvalue = tipPercent * bill;
      john.tipAmounts.push(tipvalue);
      john.totalAmounts.push(tipvalue + bill);
    }
    console.log(john.tipAmounts);
    console.log(john.totalAmounts);
  }
};
john.tipCalc(); */

//Jonas Solution
var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  tipCalc: function() {
    this.tipAmounts = [];
    this.totalAmounts = [];
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      var tipPercent;
      if (bill < 50) {
        tipPercent = 0.2;
      } else if (bill >= 50 && bill < 200) {
        tipPercent = 0.15;
      } else {
        tipPercent = 0.1;
      }
      var tipvalue = tipPercent * bill;
      this.tipAmounts[i] = tipvalue;
      this.totalAmounts[i] = tipvalue + bill;
    }
  }
};

var mark = {
  fullName: "Mark Ponting",
  bills: [77, 10, 110, 45],
  tipCalc: function() {
    this.tipAmounts = [];
    this.totalAmounts = [];
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      var tipPercent;
      if (bill < 100) {
        tipPercent = 0.2;
      } else if (bill >= 100 && bill < 300) {
        tipPercent = 0.1;
      } else {
        tipPercent = 0.25;
      }
      var tipvalue = tipPercent * bill;
      this.tipAmounts[i] = tipvalue;
      this.totalAmounts[i] = tipvalue + bill;
    }
  }
};

function calcAverage(tipAmounts) {
  var sum = 0;
  for (var i = 0; i < tipAmounts.length; i++) {
    sum = sum + tipAmounts[i];
  }
  return sum / tipAmounts.length;
}

john.tipCalc();
mark.tipCalc();

john.average = calcAverage(john.tipAmounts);
mark.average = calcAverage(mark.tipAmounts);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName + "'s" + " family has greater tips average of " + john.average
  );
} else if (john.average < mark.average) {
  console.log(
    mark.fullName + "'s" + " family has greater tips average of " + mark.average
  );
} else {
  console.log("both have same average");
}

/*===============================
// coding challenge 6 => DOM Dice Game
================================*/
