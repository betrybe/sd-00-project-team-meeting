const fibonacci = (numero) => {
    if(numero <= 1) {
        return 1
    }

    let [ultimo, penultimo] = [2,1];
    let resultado;

    for (let i = 2; i <= parseInt(numero); i++) {
        resultado = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = resultado;
    }
    
    return resultado; 
}

module.exports = fibonacci;
