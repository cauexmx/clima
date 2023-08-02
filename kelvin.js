/* isso tornará a a variavél "kelvin" em uma constante que não pode ser mudada*/
const kelvin = 0;

//criei uma variavél celsius que subtrai 273 de kelvin//
let celsius = kelvin - 273;

//printei celsius
console.log(celsius);

//criei uma variavél fahrenheit que pega celsius e faz uma operação matemática que atribui um novo valor à fahrenheit
let fahrenheit = celsius *(9/5)+32;

//aqui eu arredondei a variavél com o "Math.floor"
fahrenheit = Math.floor(fahrenheit);

//printei fahrenheit
console.log(fahrenheit);

//printei com concatenação
console.log(`A temperatura é ${fahrenheit} graus Fahrenheit`);

// peguei a variavél celsius e fiz uma operação matemática para atribuir valor a newton
let newton = celsius *(33/100)

//arredondei a variavél "newton" e depois printei
newton = Math.floor(newton)
console.log(newton)


