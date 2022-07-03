
function DescOrder(num) {
    let arr = num.toString().split('');
    arr.sort((a,b) => b - a );
    return parseInt(arr.join(''));   
}

console.log(DescOrder(153427));
