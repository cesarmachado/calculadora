function multiplicar(a, b) {
    return a * b
  }

function sumar(a, b) {
    return Number(a) + Number(b)
}

function restar(a, b) {
    return a - b
}

function dividir(a, b) {
    return a / b
}

function porciento(a, b) {
    return a * b / 100
}

window.addEventListener('load', (event) => {
    const dividirCalc = document.getElementById('dividir')
    const multiplicarCalc = document.getElementById('multiplicar')
    const restarCalc = document.getElementById('restar')    
    const sumarCalc = document.getElementById('sumar')
    const porcCalc = document.getElementById('porciento')
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

    dividirCalc.addEventListener('click', () => {
        let dividirResult = dividir(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = dividirResult
            document.getElementById('enterNumber1').value = '';
            document.getElementById('enterNumber2').value = '';
    })

    multiplicarCalc.addEventListener('click', () => {
        let multiplicarResult = multiplicar(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = multiplicarResult
            document.getElementById('enterNumber1').value = '';
            document.getElementById('enterNumber2').value = '';
    })

    restarCalc.addEventListener('click', () => {
        let restarResult = restar(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = restarResult
            document.getElementById('enterNumber1').value = '';
            document.getElementById('enterNumber2').value = '';
    })

    sumarCalc.addEventListener('click', () => {
        let sumarResult = sumar(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = sumarResult
            document.getElementById('enterNumber1').value = '';
            document.getElementById('enterNumber2').value = '';
    })

    porcCalc.addEventListener('click', () => {
        let porcResult = porciento(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = porcResult + '%'
            document.getElementById('enterNumber1').value = '';
            document.getElementById('enterNumber2').value = '';
    })

    limpiarCalc.addEventListener('click', () => {
        document.getElementById('enterNumber1').value = '';
        document.getElementById('enterNumber2').value = '';
        document.getElementById('resultado').textContent = '0';
    })

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
})