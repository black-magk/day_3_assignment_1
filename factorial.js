function factorial(num) {
  let initial = 1;

  for (let i = 0; i < num; i++){
      
      initial *= (num - i);

  }


  return initial
}




module.exports = factorial;
