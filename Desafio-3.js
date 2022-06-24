// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___
// A lógica é a soma do elemento anterior + 2; ou seja 9
const somaDois = () => {
    let numeros = [1, 3, 5, 7];
    let ultimoNumero = [...numeros].pop()
    ultimoNumero += 2
    numeros.push(ultimoNumero)
    return console.log(numeros);
}
somaDois();

//----------------------------------------------------------------------

// b) 2, 4, 8, 16, 32, 64, ____
// A lógica é o dobro do elemento anterior; ou seja 128
const dobro = () => {
    let numeros = [2, 4, 8, 16, 32, 64];
    let ultimoNumero = [...numeros].pop()
    ultimoNumero *= 2
    numeros.push(ultimoNumero)
    return console.log(numeros);
}
dobro();

//----------------------------------------------------------------------

// c) 0, 1, 4, 9, 16, 25, 36, ____
// A lógica da sequencia é o resultado do elemento ao quadrado;
//A resposta é o quadrado do número 7 ou seja 49
const aoQuadrado = () => {
    let numeros = [0, 1, 2, 3, 4, 5, 6, 7];

    let quadrados = numeros.map(item => {
        return Math.pow(item, 2);

    });
    console.log(quadrados);
}
aoQuadrado();

//----------------------------------------------------------------------

// d) 4, 16, 36, 64, ____
// A lógica da sequencia é uma Progressão Aritmética com razão de 8; Ou seja o resultado é 100
const progressaoAritmetica = (razao) => {
    let numeros = [4, 16, 36, 64];

    let termo = (numeros[numeros.length - 1] - numeros[numeros.length - 2]) + razao;
    let valor = termo + numeros[numeros.length - 1]

    console.log(valor); 
    return
};

progressaoAritmetica(8);

//----------------------------------------------------------------------

// e) 1, 1, 2, 3, 5, 8, ____
// Sequência de Fibonacci, o resultado é 13

const fibonacci = () => {

    let fibonacci = []
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < 8; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    let resul = fibonacci
    console.log(resul);

}
fibonacci();

//----------------------------------------------------------------------

// f) 2,10, 12, 16, 17, 18, 19, ____
// A lógica é sobre a primeira letra de cada número, sendo D.
//logo a resposta é 200
