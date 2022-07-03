function AlphabetPos(str) {
       
    return str.toLowerCase().split('').map(item => item.charCodeAt(0) - 96)
    .filter(item => (item < 27 && item > 0)).join(' ');
    // A = A.filter(item => item.length > 8);

    // charCodeAt(0);
}

console.log(AlphabetPos("The sunset sets at twelve o' clock."));
