var words_reversed_string = "";
(prompt().split(" ")).forEach(words => {
    words_reversed_string = words_reversed_string.concat(((words.split('').reverse().join(''))) + " ");
})
console.log(words_reversed_string);