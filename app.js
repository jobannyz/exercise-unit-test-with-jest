// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar / 1.2 * 127.9;
    // returnamos el valor
    return valueInYen;
}

const fromYentoPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen / 127.9 * 0.8;
    // returnamos el valor
    return valueInPound;
}

// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound};