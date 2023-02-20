/*
    1. Create a class called "Utilties"
    2. Add a STATIC method to "Utilties" called "camelCase" that has a single parameter:- str (String)
    3. Add logic to "camelCase" that assumes that "str" is a String and returns the camel - cased version of the String. Eg:
        * "hello there" => "helloThere"
        * "Number Stock Items" => "numberStockItems"
        * You can assume that the spaces are where we move to the next upper-cased word
*/
        

class Utilities_Class {
    static camelCase_method(string) {
        var camelCase_string = "";
        var string_array = (string.split(" "));
        for(let i=0 ; i<string_array.length ; i++){
            camelCase_string = (i == 0) ? (camelCase_string + string_array[i][0].toLowerCase() + string_array[i].substring(1)) : (camelCase_string + string_array[i][0].toUpperCase() + string_array[i].substring(1));
        }
        return camelCase_string;
    }
}

//Test Cases
["hello there" , "HELLO THERE" , "I love cookies" , "Monkey Banana"].forEach(function(test_case){
    console.log(Utilities_Class.camelCase_method(test_case));
});