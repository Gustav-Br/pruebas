function BreakCamelCase(str){
    var newArr = [];
    str.split('').map(item => ((item.charCodeAt() < 91 && item.charCodeAt() > 64 ) ? newArr.push(' ', item) : newArr.push(item)));
    return newArr.join('');
}

console.log(BreakCamelCase('caballoNegroGrande'));