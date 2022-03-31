/**
 The cable problem
 Implement algorithm 1 here
*/


/**
 The cable problem
 Implement algorithm 2 here
*/
function cable1(currentLength, requiredLength, saleLength) {
 let count = 0;
  let i = currentLength;
  while (i < requiredLength) {
    i+=saleLength
    count++
  }
  return count;
}


function cable2(currentLength, requireLength, saleLength) {
  let distance = requireLength - currentLength;
  let total = Math.round((distance/saleLength))
  return total;
}

module.exports={
  cable1,
  cable2
}