var yearsAgo = function(year)
{
  var date = new Date();
  var full = date.getFullYear();

  return (full - year);
};

yearsAgo(2010);

var yr = yearsAgo(2010);
console.log(yr + " years ago");
