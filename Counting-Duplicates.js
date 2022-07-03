function CountDuplic(str) {
    let arrPatron = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let array = str.toLowerCase().split('');
    let count = 0;
    for (i = 0; i < arrPatron.length; i++){
        var indices = [];
        var elemento = arrPatron[i];
        var idx = array.indexOf(elemento);
        while( idx != -1){
            indices.push(idx);
            idx = array.indexOf(elemento, idx + 1);
        };
        if (indices.length > 1){
            count += 1;
        }
    }
    return count;
}

console.log(CountDuplic('aAcbBhj'));
