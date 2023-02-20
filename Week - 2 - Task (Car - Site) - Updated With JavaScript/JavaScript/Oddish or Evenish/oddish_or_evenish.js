function oddishOrEvenish(number_to_check) {
  
    var sum_of_digits = 0;
    
    (number_to_check.toString().split('')).forEach(function(digit){
        sum_of_digits += (digit - '0');
    })
    
    return ((sum_of_digits % 2) == 0) ? ("Evenish") : ("Oddish");
}

console.log(oddishOrEvenish(43));

console.log(oddishOrEvenish(373));

console.log(oddishOrEvenish(4433));