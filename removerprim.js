const arrInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removTresPrimer(arreglo) {
    const [ , , , ...nuevoArr] = arreglo;
    return nuevoArr;
}

const arrFinal = removTresPrimer(arrInicial);
console.log(arrFinal);
