function ValidBraces(str){
    var stack = [];
        comp = '';
    for (i = 0; i < str.length; i++){
        if (str[i] == '(' || str[i] == '{' || str[i] == '['){
            stack.push(str[i]);
            
        }    
        if (str[i] === ')' ){
            comp = stack.pop();
            if (comp !== '(' ){
                return false;
            }
        }
        if (str[i] === '}' ){
            comp = stack.pop();
            if (comp !== '{' ){
                return false;
            }
        }
        if (str[i] === ']' ){
            comp = stack.pop();
            if (comp !== '[' ){
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(ValidBraces('({[(){}]})'));