        //inch to Feet //

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
const totalFeet = inchToFeet(565);
const roundFigure = Math.round(totalFeet)
console.log(roundFigure);