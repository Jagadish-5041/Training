for(let i = 1 ; i <= 100 ; i++){
    (((i % 3) == 0) && ((i % 5) == 0)) ? (console.log(`fizzbuzz ${i}`)) : (((i % 5) == 0) ? (console.log(`buzz ${i}`)) : (((i % 3) == 0) ? (`fizz ${i}`) : ("")));
}