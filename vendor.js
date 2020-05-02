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

window.addEventListener('load', (event) => {
    const dividirCalc = document.getElementById('dividir')
    const multiplicarCalc = document.getElementById('multiplicar')
    const restarCalc = document.getElementById('restar')    
    const sumarCalc = document.getElementById('sumar')

    dividirCalc.addEventListener('click', () => {
        let dividirResult = dividir(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = dividirResult
    })

    multiplicarCalc.addEventListener('click', () => {
        let multiplicarResult = multiplicar(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = multiplicarResult
    })

    restarCalc.addEventListener('click', () => {
        let restarResult = restar(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = restarResult
    })

    sumarCalc.addEventListener('click', () => {
        let sumarResult = sumar(
            document.getElementById('enterNumber1').value,
            document.getElementById('enterNumber2').value,)
            document.getElementById('resultado').textContent = sumarResult
    })
})