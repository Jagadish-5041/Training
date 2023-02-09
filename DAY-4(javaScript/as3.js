let enque_stack = [];
let deque_stack = [];

function enque_function(value){
    enque_stack.push(value);
}

function deque_function(){
    if(deque_stack.length == 0){
        for( ; (enque_stack.length > 0) ; ){
            deque_stack.push(enque_stack.pop());
        }
    }
    return deque_stack.pop();
}

enque_function("first_value");
enque_function("second_value");
enque_function("third_value");
console.log(deque_function());
console.log(deque_function());
console.log(deque_function());