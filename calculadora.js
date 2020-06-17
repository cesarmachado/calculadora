const math = {
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

  porciento(val1, val2) {
    return val1 * val2 / 100
  }
}

window.addEventListener('load', (event) => {

  // ------------ VARIABLES --------------- //
  let operandoUno = '';
  let operador;
  let igualResult;
  var ultimaEntrada;
  let enterNumber = document.getElementById('enterNumber');
  const DIGITO = 'digito'
  const OPERADOR = 'operador'
  const ULTIMAENTRADA = 'ultimaentrada'
  var btnDigitos = document.querySelectorAll('.digito');
  var btnOPeradores = document.querySelectorAll('.operador');
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
  
  const agregarListener = (btnDigito) => {
    btnDigito.addEventListener('click', () => {
      if (ultimaEntrada == OPERADOR) {
        enterNumber.value = '';
      }
  
      if (ultimaEntrada !== ULTIMAENTRADA) {
        enterNumber.value += btnDigito.value
        enterNumber.focus()
        ultimaEntrada = DIGITO
      }
    })
  }

  btnDigitos.forEach(agregarListener)

  /* numDec.addEventListener('click', () => {
      enterNumber.value += '.'
      enterNumber.focus()
  }) */

  // ----------- VALIDACION DEL INPUT ----------- //
  enterNumber.addEventListener('keypress', soloNumeros, false)

  // ------- NUMEROS POSITIVOS Y NEGATIVOS ------- //
  numNeg.addEventListener('click', () => {
    let valor = enterNumber.value
    let valor2 = igualResult
    if (valor) {
      let negativo = -1 * valor
      enterNumber.value = negativo
    }

    if (valor < 0) {
      let positivo = -1 * valor
      enterNumber.value = positivo
    }

    if (valor2) {
      let negativo = -1 * valor
      enterNumber.value = negativo
    }

    if (valor2 < 0) {
      let positivo = -1 * valor
      enterNumber.value = positivo
    }
    enterNumber.focus()
  })

 // ----------- OPERADORES ----------- //

  let agregarEventListenerOperator = (btnOPerador) => {
    btnOPerador.addEventListener('click', () => {
      // existe valor en el input y no tengo operador guardado
      if (enterNumber.value !== '' && !operador) {
        operandoUno = enterNumber.value
        operador = btnOPerador.value
        console.log(operador)
      } else {
        // 'existe valor en el input y valor1 y operador guardado'
        //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
        if (enterNumber.value !== '' && operandoUno !== '' && operador) {
          let operandoDos = enterNumber.value
          igualResult = math[operador](Number(operandoUno), Number(operandoDos))
          enterNumber.value = igualResult
          operador = ''
          operandoUno = igualResult
        }
      }
      ultimaEntrada = OPERADOR
    })
  }

  btnOPeradores.forEach(agregarEventListenerOperator)

  /* diviCalc.addEventListener('click', () => {
    // existe valor en el input y no tengo operador guardado
    if (enterNumber.value !== '' && !operador) {
      operandoUno = enterNumber.value
      operador = 'dividir'
      console.log(operador)
    } else {
      // 'existe valor en el input y valor1 y operador guardado'
      //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
      if (enterNumber.value !== '' && operandoUno !== '' && operador) {
        let operandoDos = enterNumber.value
        igualResult = math[operador](Number(operandoUno), Number(operandoDos))
        enterNumber.value = igualResult
        operador = ''
        operandoUno = igualResult
      }
    }
    ultimaEntrada = OPERADOR
  })

  multiCalc.addEventListener('click', () => {
    // existe valor en el input y no tengo operador guardado
    if (enterNumber.value !== '' && !operador) {
      operandoUno = enterNumber.value
      operador = 'multiplicar'
      console.log(operador)
    } else {
      // 'existe valor en el input y valor1 y operador guardado'
      //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
      if (enterNumber.value !== '' && operandoUno !== '' && operador) {
        let operandoDos = enterNumber.value
        igualResult = math[operador](Number(operandoUno), Number(operandoDos))
        enterNumber.value = igualResult
        operador = ''
        operandoUno = igualResult
      }
    }
    ultimaEntrada = OPERADOR
  })

  restCalc.addEventListener('click', () => {
    // existe valor en el input y no tengo operador guardado
    if (enterNumber.value !== '' && !operador) {
      operandoUno = enterNumber.value
      operador = 'restar'
      console.log(operador)
    } else {
      // 'existe valor en el input y valor1 y operador guardado'
      //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
      if (enterNumber.value !== '' && operandoUno !== '' && operador) {
        let operandoDos = enterNumber.value
        igualResult = math[operador](Number(operandoUno), Number(operandoDos))
        enterNumber.value = igualResult
        operador = ''
        operandoUno = igualResult
      }
    }
    ultimaEntrada = OPERADOR
  })

  sumaCalc.addEventListener('click', () => {
    // existe valor en el input y no tengo operador guardado
    if (enterNumber.value !== '' && !operador) {
      operandoUno = enterNumber.value
      operador = 'sumar'
      console.log(operador)
    } else {
      // 'existe valor en el input y valor1 y operador guardado'
      //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
      if (enterNumber.value !== '' && operandoUno !== '' && operador) {
        let operandoDos = enterNumber.value
        igualResult = math[operador](Number(operandoUno), Number(operandoDos))
        enterNumber.value = igualResult
        operador = ''
        operandoUno = igualResult
      }
    }
    ultimaEntrada = OPERADOR
  }) */

  pcienCalc.addEventListener('click', () => {
    if (enterNumber.value !== '' && operandoUno == '') {
      operandoUno = enterNumber.value
      operador = 'porciento'
      let pCiento = math[operador](operandoUno, 1)
      enterNumber.value = pCiento
    } else {
      if (enterNumber.value !== '' && operandoUno !== '' && operador == 'multiplicar') {
        operandoDos = enterNumber.value
        operador = 'porciento'
        let pCiento = math[operador](Number(operandoUno), Number(operandoDos))
        enterNumber.value = pCiento
        operandoUno = pCiento
      }
    } 
    ultimaEntrada = OPERADOR
  })

  igualCalc.addEventListener('click', () => {
    // 'existe valor en el input y valor1 y operador guardado'
    //'significa que debo ejecutar operacion guardada usando el valor de la pantalla como valor2'
    if (enterNumber.value !== '' && operandoUno !== '' && operador) {
      let operandoDos = enterNumber.value
      igualResult = math[operador](Number(operandoUno), Number(operandoDos))
      enterNumber.value = igualResult
      operador = ''
    }
    ultimaEntrada = ULTIMAENTRADA
  })

  limpCalc.addEventListener('click', () => {
    enterNumber.focus()
    enterNumber.value = ''
    operandoUno = ''
    operador = ''
    ultimaEntrada = ''
  })

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
