window.addEventListener('load', (event) => {

    // ------------ VARIABLES --------------- //

    let valUno;
    let valDos;
    let operador;
    let enterNumber = document.getElementById('enterNumber')
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
        enterNumber.value += 0
        enterNumber.focus()
    })

    num1.addEventListener('click', () => {
        enterNumber.value += 1
        enterNumber.focus()
    })

    num2.addEventListener('click', () => {
        enterNumber.value += 2
        enterNumber.focus()
    })

    num3.addEventListener('click', () => {
        enterNumber.value += 3
        enterNumber.focus()
    })

    num4.addEventListener('click', () => {
        enterNumber.value += 4
        enterNumber.focus()
    } )

    num5.addEventListener('click', () => {
        enterNumber.value += 5
        enterNumber.focus()
    })

    num6.addEventListener('click', () => {
        enterNumber.value += 6
        enterNumber.focus()
    })

    num7.addEventListener('click', () => {
        enterNumber.value += 7
        enterNumber.focus()
    })

    num8.addEventListener('click', () => {
        enterNumber.value += 8
        enterNumber.focus()
    })

    num9.addEventListener('click', () => {
        enterNumber.value += 9
        enterNumber.focus()
    })

    numDec.addEventListener('click', () => {
        enterNumber.value += '.'
        enterNumber.focus()
    })

    // ----------- VALIDACION DEL INPUT PARA SOLO NUMEROS ----------- //
    enterNumber.addEventListener('keypress', (e) => {
        var key = window.event ? e.which : e.keyCode
        if ( ( key < 48 || key > 57 ) && ( key !== 46 ) ) {
            e.preventDefault()
        }
    })

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

/*     sumaCalc.addEventListener('click', () => {
        valUno = document.getElementById('enterNumber').value
        if ( valUno !== undefined ) {
            
        }
        
    }) */

/*     pcienCalc.addEventListener('click', () => {
        let val = document.getElementById('enterNumber').value
        operador = 'porciento'
        let pCiento = math[operador](val)
        return document.getElementById('enterNumber').value = pCiento
    }) */

    limpCalc.addEventListener('click', () => {
        enterNumber.value = ''
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

    // ----------- FUNCIONES -------------- //

    // Solo permite introducir numeros en el enterNumber.
    /* function soloNumeros(e){
        var key = window.event ? e.which : e.keyCode
        if ( ( key < 48 || key > 57 ) && ( key !== 46 ) ) {
            e.preventDefault()
        }
    } */

})