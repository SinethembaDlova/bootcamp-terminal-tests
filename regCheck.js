var regCheck = function(regPlate, location)
{
    var isFrom = regPlate.endsWith(location);
    return isFrom;

};

regCheck('DV 23 NB GP', 'GP');

var Check = regCheck('DV 23 NB GP', 'GP');
console.log(Check);
