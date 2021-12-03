// const app = document.getElementById('app')
// const div1 = document.createElement('div')
// div1.classList.add('row')

// app.appendChild(div1)
const displaySegundos = document.querySelector('#seconds')
const displayMinutos = document.querySelector('#minutes')
const displayHoras = document.querySelector('#hours')
const displayDias = document.querySelector('#days')

const proximoAno = new Date().getFullYear() + 1
const anoNovo = new Date(`Janeiro 01 ${proximoAno} 00:00:00`)

const atualizarContagem = () => {
    const horaAtual = new Date()
    const diferenca = anoNovo - horaAtual
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24)
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
    const minutos = Math.floor(diferenca / 1000 / 60) % 60
    const segundos = Math.floor(diferenca / 1000) % 60

    displaySegundos.textContent = segundos < 10 ? '0' + segundos : segundos
    displayMinutos.textContent = minutos < 10 ? '0' + minutos : minutos
    displayHoras.textContent = horas < 10 ? '0' + horas : horas
    displayDias.textContent = dias < 10 ? '0' + dias : dias

}

setInterval(atualizarContagem, 1000)