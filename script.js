const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {
    const imc = (peso.value / (altura.value * altura.value).toFixed(2))
    let classication = ''

    if (imc < 18.5){
        classication = 'Abaixo do peso'
    } else if (imc < 25){
        classication = 'Peso normal'
    } else if (imc < 30){
        classication = 'Acima do peso'
    } else if (imc < 35){
        classication = 'Obesidade Grau I'
    } else if (imc < 41){
        classication = 'Obesidade Grau II'
    } else {
        classication = 'Obesidade Grau III'
    }

    resultado.innerHTML = `IMC: ${imc.toFixed(2)} (${classication})`
}