
/**
 The missing number problem
 Implement algorithm 1 here
*/
  function missing1(A) {
    const N = A.length + 1
    for(let i = 1; i < N; i++){
        let found = false;
        let j = 0;
      while(!found && j < A.length){
      if(i === A[j])
        found = true
        j+=1
}
    if(!found) return i
      }
  }
/**
The missing number problem
Implement algorithm 2 here
*/

function missing2(A) {
  const N = A.length + 1;
  let sum = 0;
  let fullSum = 0;
  for(let i = 0; i < A.length; i++) {
      sum += A[i];
  }
  
  //instead can be done as 
  //fullSum = (N*(N+1))/2

for(let i = 1; i <=N; i++) {
    fullSum += i
}
return fullSum - sum
}

module.exports ={
  missing1,
  missing2,
}