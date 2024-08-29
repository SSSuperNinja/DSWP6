const numeros = [12, 5, 8, 130, 44, 22, 17, 39];

const valorUsuario = 20;

const filtrados = numeros.filter(numero => numero > valorUsuario);

console.log(`Números mayores que ${valorUsuario}:`, filtrados);