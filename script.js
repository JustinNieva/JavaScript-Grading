const score1 = 45;
const score2 = 82;
const score3 = 17;
const score4 = 69; 
const score5 = 38;

let average = ( score1 + score2 + score3 + score4 + score5) / 5;

let grade;

switch (true) {
    case (average > 91):
        grade = "A";
        break;
    case (average >= 81 && average <= 90):
        grade = "B"
        break;
    case (average >= 71 && average <= 80):
        grade = "C"
        break;
    case (average >= 60 && average <= 70):
        grade = "D"
        break;
    default:
        grade = "F"
}

console.log('The grade letter average is:')