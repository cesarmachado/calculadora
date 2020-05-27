window.addEventListener('load', (event) => {
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
    const numNeg = document.getElementById('negativo')
    const numDec = document.getElementById('decimal')
    const sumaCalc = document.getElementById('sumar')
    const restCalc = document.getElementById('restar')
    const multiCalc = document.getElementById('multiplicar')
    const diviCalc = document.getElementById('dividir')
    const pcienCalc = document.getElementById('porciento')
    const igualCalc = document.getElementById('igual')
    const limpCalc = document.getElementById('limpiarCalc')

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

    numNeg.addEventListener('click', () => {
        if (document.getElementById('enterNumber').value !== undefined) {
           let negativo = '-' + document.getElementById('enterNumber').value
           document.getElementById('enterNumber').value = negativo
        }       else {
            document.getElementById('enterNumber').value = ''
        }
    })

       /*  if (document.getElementById('enterNumber') == negativo) {
            let positivo = document.getElementById('enterNumber').value 
        }
         */
  

    /* numDec.addEventListener('click', () => {
        if (document.getElementById('enterNumber').value !== '') {
            let decimal = document.getElementById('enterNumber').value + '-'
            console.log(decimal)
            document.getElementById('enterNumber').value = decimal
        } else {
            document.getElementById('enterNumber').value = ''
        }
    }) */

    sumaCalc.addEventListener('click', () => {
        valUno = document.getElementById('enterNumber').value
        //operador = 'sumar' 
        //let suCalc = math[operador](valUno, valDos)
        //return document.getElementById('enterNumber').value = suCalc
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