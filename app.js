// Created Elements whith atributes, class and text
const app = document.getElementById('app')
const divContainer = document.createElement('div')
divContainer.classList.add('container')
app.appendChild(divContainer)

const divRow = document.createElement('div')
divRow.classList.add('row', 'justify-content-center')

const divColTitle = document.createElement('div')
divColTitle.classList.add('col')

const title = document.createElement('h1')
title.classList.add('mb-4', 'text-center', 'text-light')
title.textContent = 'Contagem Regressiva para o Ano Novo'

const divRowCountdown = document.createElement('div')
divRowCountdown.classList.add('row', 'justify-content-center')

const divColDays = document.createElement('div')
divColDays.classList.add('col-3', 'col-sm-2', 'col-md-2', 'col-lg-1', 'text-center', 'mx-lg-2', 'px-0')

const days = document.createElement('h2')
days.setAttribute('id', 'days"')
days.classList.add('text-light')

const textDays = document.createElement('small')
textDays.classList.add('text-light')
textDays.textContent = 'Dias'

const divColHours = document.createElement('div')
divColHours.classList.add('col-3', 'col-sm-2', 'col-md-2', 'col-lg-1', 'text-center', 'mx-lg-2', 'px-0')
const hours = document.createElement('h2')
hours.setAttribute('id', 'hours"')
hours.classList.add('text-light')

const textHours = document.createElement('small')
textHours.classList.add('text-light')
textHours.textContent = 'Horas'

const divColminutes = document.createElement('div')
divColminutes.classList.add('col-3', 'col-sm-2', 'col-md-2', 'col-lg-1', 'text-center', 'mx-lg-2', 'px-0')

const minutes = document.createElement('h2')
minutes.setAttribute('id', 'minutes"')
minutes.classList.add('text-light')

const textminutes = document.createElement('small')
textminutes.classList.add('text-light')
textminutes.textContent = 'Minutos'

const seconds = document.createElement('h2')
seconds.setAttribute('id', 'seconds"')
seconds.classList.add('text-light')

const divColSeconds = document.createElement('div')
divColSeconds.classList.add('col-3', 'col-sm-2', 'col-md-2', 'col-lg-1', 'text-center', 'mx-lg-2', 'px-0')

const textSeconds = document.createElement('small')
textSeconds.classList.add('text-light')
textSeconds.textContent = 'Segundos'

divContainer.appendChild(divRow)
divRow.appendChild(divColTitle)
divColTitle.appendChild(title)
divContainer.appendChild(divRowCountdown)
divRowCountdown.appendChild(divColDays)
divColDays.appendChild(days)
divColDays.appendChild(textDays)
divRowCountdown.appendChild(divColHours)
divColHours.appendChild(hours)
divColHours.appendChild(textHours)
divRowCountdown.appendChild(divColminutes)
divColminutes.appendChild(minutes)
divColminutes.appendChild(textminutes)
divRowCountdown.appendChild(divColSeconds)
divColSeconds.appendChild(seconds)
divColSeconds.appendChild(textSeconds)

const nextYear = document.createElement('div')
nextYear.setAttribute('id', 'year')
nextYear.classList.add('year', 'text-center', 'text-light')
divContainer.appendChild(nextYear)

const proximoAno = new Date().getFullYear() + 1
nextYear.textContent = proximoAno

const anoNovo = new Date(`Janeiro 01 ${proximoAno} 00:00:00`)
const atualizarContagem = () => {
    const horaAtual = new Date()
    const diferenca = anoNovo - horaAtual
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24)
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
    const minutos = Math.floor(diferenca / 1000 / 60) % 60
    const segundos = Math.floor(diferenca / 1000) % 60

    seconds.textContent = segundos < 10 ? '0' + segundos : segundos
    minutes.textContent = minutos < 10 ? '0' + minutos : minutos
    hours.textContent = horas < 10 ? '0' + horas : horas
    days.textContent = dias < 10 ? '0' + dias : dias

}

setInterval(atualizarContagem, 1000)