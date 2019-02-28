var fahadMass = 76;
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
}
