/**
 * Write a function named splitSum1 that implements algorithm 1 here
 */
 function splitSum1(tours) {
    let total = 0;
    //can also use reduce
  //   total = tours.reduce((acc, tour)=>acc + tour, 0)
    for(let i = 0; i < tours.length; i++) {
  //     console.log(tours[i])
      if(tours[i]) total+=tours[i]
    }
  //   console.log(total)
    let preSum = 0
    let postSum = total;
    let smallest = Infinity
    for(let i = 0; i<tours.length -1; i++){
      preSum+=tours[i]
      postSum-=tours[i]
      let difference = Math.abs(preSum - postSum)
  //     console.log(difference)
      if(difference < smallest) smallest = difference
    }
  //   console.log(smallest)
    return smallest
    
  }
  
  /**
   * Write a function named splitSum2 that implements algorithm 2 here
   */
  function splitSum2(tours) {
    let smallest = Infinity
    for(let i = 0; i <= tours.length - 1; i++){
      let preSum = 0
      preSum += tours[i]
      let postSum = 0
      postSum += tours[i+1]
      let difference = Math.abs(preSum - postSum)
  //     console.log(difference)
      if(difference < smallest) smallest = difference
    }
    return smallest
  }
  
  
  module.exports = { splitSum1, splitSum2 };