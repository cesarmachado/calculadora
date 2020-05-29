window.addEventListener('load', (event) => {

    // ------------ VARIABLES --------------- //

    let valUno;
    let valDos;
    let operador;
    const num0 = document.getElementById('cero')
    const num1 = document.getElementById('uno')
    const num2 = document.getElementById('dos')
    const num3 = document.getElementById('tres')
    const num4 = document.getElementById('cuatro')
    const num5 = document.getElementById('cinco')
    const num6 = document.getElementById('seis')
    const num7 = document.getElementById('siete')
    const num8 = document.getElementById('ocho')
    const num9 = document.getElementById('nueve')
    const sumaCalc = document.getElementById('sumar')
    const restCalc = document.getElementById('restar')
    const multiCalc = document.getElementById('multiplicar')
    const diviCalc = document.getElementById('dividir')
    const pcienCalc = document.getElementById('porciento')
    const igualCalc = document.getElementById('igual')
    const limpCalc = document.getElementById('limpiarCalc')
    let numNeg = document.getElementById('negativo')
    let numDec = document.getElementById('decimal')
    
    // ----------- Adicionnar Numeros ----------- //

    num0.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 0
    })

    num1.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 1
    })

    num2.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 2
    })

    num3.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 3
    })

    num4.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 4
    } )

    num5.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 5
    })

    num6.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 6
    })

    num7.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 7
    })

    num8.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 8
    })

    num9.addEventListener('click', () => {
        document.getElementById('enterNumber').value += 9
    })

    numDec.addEventListener('click', () => {
        document.getElementById('enterNumber').value += '.'
    })

   //*** Este Codigo permite Validar que sea un campo Numerico
   function Solo_Numerico(variable){
    Numer=parseInt(variable);
    if (isNaN(Numer)){
        return "";
    }
    return Numer;
}
    function ValNumero(Control){
        Control.value=Solo_Numerico(Control.value);
    }
//*** Fin del Codigo para Validar que sea un campo Numerico

    // ------- Numeros Positivos y negativos ------- //

    numNeg.addEventListener('click', () => {
        let valor = document.getElementById('enterNumber').value
        if ( valor ) {
           let negativo = -1 * valor
           document.getElementById('enterNumber').value = negativo
        } 

        if ( valor < 0 ) {
            let positivo = -1 * valor
             document.getElementById('enterNumber').value = positivo
        }
    })

    sumaCalc.addEventListener('click', () => {
        valUno = document.getElementById('enterNumber').value
        if ( valUno !== undefined ) {
            
        }
        
    })

    pcienCalc.addEventListener('click', () => {
        let val = document.getElementById('enterNumber').value
        operador = 'porciento'
        let pCiento = math[operador](val)
        return document.getElementById('enterNumber').value = pCiento
    })

    limpCalc.addEventListener('click', () => {
        document.getElementById('enterNumber').value = ''
    })

    let math = {
        multiplicar(val1, val2) {
            return val1 * val2 
        },

        dividir(val1, val2) {
            return val1 / val2
        },

        sumar(val1, val2) {
            return val1 - val2
        },

        restar(val1, val2) {
            return val1 - val2
        },

        porciento(val) {
            return val / 100
        }
    }

})