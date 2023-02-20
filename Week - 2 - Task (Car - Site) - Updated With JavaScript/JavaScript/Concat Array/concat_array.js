function concat(...N_arrays) {
  
    var concatenated_N_arrays = [];
  
    N_arrays.forEach(function(each_array) {
        concatenated_N_arrays = concatenated_N_arrays.concat(each_array);
    });
  
    console.log(concatenated_N_arrays);
}

concat([1 , 2 , 3] , [4 , 5] , [6 , 7]);

concat([1] , [2] , [3] , [4] , [5] , [6] , [7] , [8] , [9] , [10]);

concat([1 , 2] , [3 , 4]);