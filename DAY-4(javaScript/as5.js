function check_anagram(first_string , second_string){
    
    if(first_string.length != second_string.length){
        return false;
    }
    
    var first_string_character_frequency_array = [];
    first_string_character_frequency_array.length = 26;
    first_string_character_frequency_array.fill(0 , 0 , 26);
    
    var second_string_character_frequency_array = [];
    second_string_character_frequency_array.length = 26;
    second_string_character_frequency_array.fill(0 , 0 , 26);
    
    for(let i = 0 ; i<first_string.length ; i++){
        first_string_character_frequency_array[(first_string.charCodeAt(i) - 97)]++;
        second_string_character_frequency_array[(second_string.charCodeAt(i) - 97)]++;
    }
    
    for(let i = 0 ; i<first_string.length ; i++){
        if(first_string_character_frequency_array[(first_string.charCodeAt(i) - 97)] != second_string_character_frequency_array[(first_string.charCodeAt(i) - 97)]){
            return false;
        }
    }
    
    return true;
}

var first_string = "Mary";
var second_string = "Army";
console.log(check_anagram((first_string.toLowerCase()) , (second_string.toLowerCase())));