window.addEventListener('load', (event) => {

    // ------------ VARIABLES --------------- //
    let operandoUno = '';
    let operador;
    let igualResult;
    var ultimaEntrada;
    let enterNumber = document.getElementById('enterNumber');
    const DIGITO = 'digito'
    const OPERADOR = 'operador'
    const num0 = document.getElementById('cero');
    const num1 = document.getElementById('uno');
    const num2 = document.getElementById('dos');
    const num3 = document.getElementById('tres');
    const num4 = document.getElementById('cuatro');
    const num5 = document.getElementById('cinco');
    const num6 = document.getElementById('seis');
    const num7 = document.getElementById('siete');
    const num8 = document.getElementById('ocho');
    const num9 = document.getElementById('nueve');
    const sumaCalc = document.getElementById('sumar');
    const restCalc = document.getElementById('restar');
    const multiCalc = document.getElementById('multiplicar');
    const diviCalc = document.getElementById('dividir');
    const pcienCalc = document.getElementById('porciento');
    const igualCalc = document.getElementById('igual');
    const limpCalc = document.getElementById('limpiarCalc');
    let numNeg = document.getElementById('negativo');
    let numDec = document.getElementById('decimal');

    // ----------- ADICIONAR NUMEROS ----------- //
    num0.addEventListener('click', () => {
      if (ultimaEntrada == OPERADOR) {
        enterNumber.value = '';
      }
        enterNumber.value += 0
        enterNumber.focus()
        // enterNumber.value += 0
        // enterNumber.focus()
        // ultimaEntrada = DIGITO
    })

    num1.addEventListener('click', () => {
      if (ultimaEntrada == OPERADOR) {
        enterNumber.value = '';
      }

      if (ultimaEntrada = DIGITO) {
        enterNumber.value += 1
        enterNumber.focus()
      }
        // enterNumber.value += 1
        // enterNumber.focus()
        // ultimaEntrada = DIGITO
    })

    num2.addEventListener('click', () => {
        enterNumber.value += 2
        enterNumber.focus()
        ultimaEntrada = DIGITO
    })

    num3.addEventListener('click', () => {
        enterNumber.value += 3
        enterNumber.focus()
        ultimaEntrada = DIGITO
    })

    num4.addEventListener('click', () => {
        enterNumber.value += 4
        enterNumber.focus()
        ultimaEntrada = DIGITO
    })

    num5.addEventListener('click', () => {
        enterNumber.value += 5
        enterNumber.focus()
        ultimaEntrada = DIGITO
    })

    num6.addEventListener('click', () => {
        enterNumber.value += 6
        enterNumber.focus()
        ultimaEntrada = DIGITO
    })

    num7.addEventListener('click', () => {
        enterNumber.value += 7
        enterNumber.focus()
        ultimaEntrada = DIGITO
    })

    num8.addEventListener('click', () => {
        enterNumber.value += 8
        enterNumber.focus()
        ultimaEntrada = DIGITO
    })

    num9.addEventListener('click', () => {
        enterNumber.value += 9
        enterNumber.focus()
        ultimaEntrada = DIGITO
    })

    /* numDec.addEventListener('click', () => {
        enterNumber.value += '.'
        enterNumber.focus()
    }) */

    // ----------- VALIDACION DEL INPUT ----------- //
    enterNumber.addEventListener('keypress', soloNumeros, false)

    // ------- NUMEROS POSITIVOS Y NEGATIVOS ------- //
    numNeg.addEventListener('click', () => {
        let valor = enterNumber.value
        if (valor) {
            let negativo = -1 * valor
            enterNumber.value = negativo
        }

        if (valor < 0) {
            let positivo = -1 * valor
            enterNumber.value = positivo
        }
        enterNumber.focus()
    })

    diviCalc.addEventListener('click', () => {
         // no existe valor en el input ni operador guardado
         if (enterNumber.value == '' && !operador) {
            return
        }
        // existe valor en el input y no tengo operador guardado
        if (enterNumber.value !== '' && !operador) {
            operandoUno = enterNumber.value
            operador = 'dividir'
            ultimaEntrada = OPERADOR
            enterNumber.value = ''
            console.log(operandoUno)
            console.log(ultimaEntrada)
        }
        // 'existe valor en el input y valor1 y operador guardado'
        //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
        if (enterNumber.value !== '' && operandoUno !== '' && operador) {
            let operandoDos = enterNumber.value
            igualResult = math[operador](Number(operandoUno), Number(operandoDos))
            enterNumber.value = igualResult
            operador = 'dividir'
            ultimaEntrada = OPERADOR
            operandoUno = ''
            console.log(operador)
            console.log(igualResult)
        }
    })

    multiCalc.addEventListener('click', () => {
        // no existe valor en el input ni operador guardado
        if (enterNumber.value == '' && !operador) {
            return
        }
        // existe valor en el input y no tengo operador guardado
        if (enterNumber.value !== '' && !operador) {
            operandoUno = enterNumber.value
            operador = 'multiplicar'
            ultimaEntrada = operador
            enterNumber.value = ''
            console.log(operandoUno)
            console.log(operador)
        }
        // 'existe valor en el input y valor1 y operador guardado'
        //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
        if (enterNumber.value !== '' && operandoUno !== '' && operador) {
            let operandoDos = enterNumber.value
            igualResult = math[operador](Number(operandoUno), Number(operandoDos))
            enterNumber.value = igualResult
            operador = 'multiplicar'
            ultimaEntrada = OPERADOR
            operandoUno = igualResult
            console.log(operador)
            console.log(igualResult)
        }
    })

    restCalc.addEventListener('click', () => {
        // no existe valor en el input ni operador guardado
        if (enterNumber.value == '' && !operador) {
            return
        }
        // existe valor en el input y no tengo operador guardado
        if (enterNumber.value !== '' && !operador) {
            operandoUno = enterNumber.value
            operador = 'restar'
            ultimaEntrada = OPERADOR
            enterNumber.value = ''
            console.log(operandoUno)
            console.log(operador)
        }
        // 'existe valor en el input y valor1 y operador guardado'
        //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
        if (enterNumber.value !== '' && operandoUno !== '' && operador) {
            let operandoDos = enterNumber.value
            igualResult = math[operador](Number(operandoUno), Number(operandoDos))
            enterNumber.value = igualResult
            operador = 'restar'
            ultimaEntrada = OPERADOR
            operandoUno = igualResult
            console.log(operador)
            console.log(igualResult)
        }
    })

    sumaCalc.addEventListener('click', () => {
        // no existe valor en el input ni operador guardado
        if (enterNumber.value == '' && !operador) {
            return
        }
        // existe valor en el input y no tengo operador guardado
        if (enterNumber.value !== '' && !operador) {
            operandoUno = enterNumber.value
            operador = 'sumar'
            ultimaEntrada = OPERADOR
            enterNumber.value = ''
            console.log(operandoUno)
            console.log(operador)
        }
        // 'existe valor en el input y valor1 y operador guardado'
        //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
        if (enterNumber.value !== '' && operandoUno !== '' && operador) {
            let operandoDos = enterNumber.value
            igualResult = math[operador](Number(operandoUno), Number(operandoDos))
            enterNumber.value = igualResult
            operador = 'sumar'
            ultimaEntrada = OPERADOR
            operandoUno = igualResult
            console.log(operador)
            console.log(igualResult)
        }
    })

    pcienCalc.addEventListener('click', () => {
        let val = enterNumber.value
        operador = 'porciento'
        ultimaEntrada = OPERADOR
        let pCiento = math[operador](val)
        enterNumber.value = pCiento
    })

    igualCalc.addEventListener('click', () => {
        let operandoDos = enterNumber.value
        let igualResult = math[operador](operandoUno, operandoDos)
        operandoUno = ''
       enterNumber.value = igualResult
    })

    limpCalc.addEventListener('click', () => {
        enterNumber.focus()
        enterNumber.value = ''
        operandoUno = ''
        operador = ''
    })

    let math = {
        multiplicar(val1, val2) {
            return val1 * val2
        },

        dividir(val1, val2) {
            return val1 / val2
        },

        sumar(val1, val2) {
            return val1 + val2
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
    function soloNumeros(e) {
        var key = window.event ? e.which : e.keyCode
        if ((key < 48 || key > 57) && (key !== 46)) {
            e.preventDefault()
        }
      }
});

// 1 - escribir la tarea, condiciones, casos de uso y accion a ejecutar en cada caso de uso
       // 2 - escribir en pseudo codigo 
       // 3 traducir a js

    // 1. comprobar si el ultimo valor fue un digito u operador
