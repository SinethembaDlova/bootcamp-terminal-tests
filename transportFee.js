var transportFee = function(shift)
{
  if(shift === "morning")
  {
    return "R20";
  }

  else if (shift === "afternoon")
  {
    return "R10, work will cover your transport back home.";
  }

  else
  {
    return "Your transport is free, you're covered.";
  }
};


transportFee("night");
transportFee("night");
transportFee("night");

var shiftsheet = transportFee("night");
var shiftsheet1 = transportFee("morning");
var shiftsheet2 = transportFee("afternoon");

console.log(shiftsheet);
console.log(shiftsheet1);
console.log(shiftsheet2);
