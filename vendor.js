window.addEventListener('load', (event) => {
    let operandoUno;
    let operador;
    const dividirCalc = document.getElementById('dividir')
    const multiplicarCalc = document.getElementById('multiplicar')
    const restarCalc = document.getElementById('restar')    
    const sumarCalc = document.getElementById('sumar')
    const porcCalc = document.getElementById('porciento')
    const igualCalc = document.getElementById('igual')
    const limpiarCalc = document.getElementById('limpiarTodo')
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

    let math = {
        multiplicar(a, b) {
            return a * b
        },
    
        sumar(a, b) {
            return Number(a) + Number(b)    
        },
    
        restar(a, b) {
            return a - b
        },
    
        dividir(a, b) {
            return a / b
        },
    
        porciento(a, b) {
            return a * b / 100  
        }
    }    

     num0.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 0
    })

     num1.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 1
    })

     num2.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 2
    })

     num3.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 3
    })

     num4.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 4
    })

     num5.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 5
    })

     num6.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 6
    })

     num7.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 7
    })

     num8.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 8
    })

     num9.addEventListener('click', () => {
        document.getElementById('enterNumber1').value += 9
    })

    dividirCalc.addEventListener('click', () => {
        operandoUno = document.getElementById('enterNumber1').value
        operador = 'dividir'
        document.getElementById('enterNumber1').value = ''
        console.log(operandoUno)
    })

    multiplicarCalc.addEventListener('click', () => {
        operandoUno = document.getElementById('enterNumber1').value
        operador = 'multiplicar'
        document.getElementById('enterNumber1').value = ''
        console.log(operandoUno)
    })

    restarCalc.addEventListener('click', () => {
        operandoUno = document.getElementById('enterNumber1').value
        operador = 'restar'
        document.getElementById('enterNumber1').value = ''
        console.log(operandoUno)
    })

    sumarCalc.addEventListener('click', () => {
        operandoUno = document.getElementById('enterNumber1').value
        operador = 'sumar'
        document.getElementById('enterNumber1').value = ''
        console.log(operandoUno)
    })

    porcCalc.addEventListener('click', () => {
        operandoUno = document.getElementById('enterNumber1').value
        operador = 'porciento'
        document.getElementById('enterNumber1').value = ''
        console.log(operandoUno)
    })

    igualCalc.addEventListener('click', () => {
        let operadorDos = document.getElementById('enterNumber1').value
        let igualResult = math[operador](operandoUno, operadorDos)
        return document.getElementById('resultado').textContent = igualResult
    })

    limpiarCalc.addEventListener('click', () => {
        document.getElementById('EnterNumber1').value = ''
        document.getElementById('resultado').textContent = '0'
    })
})