/**@fernandoarchila**/
/**interfaz 3 **/
const Calculadora = require('./calculadora');

class InterfazValidacionFormateo {
    constructor() {
        this.calculadora = new Calculadora();
    }

    validarYCalcular(operacion, valorA, valorB) {
        // Validar y convertir entradas
        const a = this.validarNumero(valorA);
        const b = this.validarNumero(valorB);

        let resultado;
        switch (operacion) {
            case 'add':
                resultado = this.calculadora.sumar(a, b);
                break;
            case 'subtract':
                resultado = this.calculadora.restar(a, b);
                break;
            case 'multiply':
                resultado = this.calculadora.multiplicar(a, b);
                break;
            case 'divide':
                resultado = this.calculadora.dividir(a, b);
                break;
            default:
                throw new Error('Operación no válida');
        }

        return this.formatearResultado(resultado);
    }

    validarNumero(valor) {
        if (valor === null || valor === undefined || valor === '') {
            throw new Error('El valor no puede estar vacío');
        }

        const numero = parseFloat(valor);
        if (isNaN(numero)) {
            throw new Error('El valor debe ser un número válido');
        }

        return numero;
    }

    formatearResultado(resultado) {
        return {
            valor: resultado,
            formateado: resultado.toFixed(2),
            texto: `Resultado: ${resultado}`
        };
    }
}

module.exports = InterfazValidacionFormateo;