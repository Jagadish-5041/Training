function binary_search_using_recursion(left , right , search_element , array){
    
    if(left > right){
        return false;
    }
    
    middle = Math.floor((left + right) / 2);
    
    return ((array[middle] == search_element) ? ((middle + 1)) : ((search_element < array[middle]) ? (binary_search_using_recursion(left , (middle - 1) , search_element , array)) : (binary_search_using_recursion((middle + 1) , right , search_element , array))))
}

var array = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100];
var search_element = 90;
var result = (binary_search_using_recursion(0 , (array.length - 1) , search_element , array));
(!result) ? (console.log(`Search Element ${search_element} Not Found ... `)) : (console.log(`Search Element Found At Position : ${result}`));

var array = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100];
var search_element = 190;
var result = (binary_search_using_recursion(0 , (array.length - 1) , search_element , array));
(!result) ? (console.log(`Search Element ${search_element} Not Found ... `)) : (console.log(`Search Element Found At Position : ${result}`));