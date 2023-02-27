const btnSaibaMais = document.querySelector('#btnSaibaMais')
const resposta1 = document.querySelector('#resposta1')
const buttonPlus = document.querySelector('.fa-plus')
const boxPergunta = document.querySelector('.pergunta')

btnSaibaMais.addEventListener('click', ()=>{
        const actualDisplayResposta1 = getComputedStyle(resposta1).display

        if(actualDisplayResposta1 === 'none'){
                resposta1.style.display = 'block'
                resposta2.style.display = 'none'
                resposta3.style.display = 'none'
                buttonPlus.style.transform = 'rotate(135deg)'
                buttonPlus2.style.transform = 'rotate(90deg)'
                buttonPlus3.style.transform = 'rotate(90deg)'
                boxPergunta.style.borderBottom = '124px solid rgba(16, 23, 88, 0.288)'
                boxPergunta2.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
                boxPergunta3.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
        } else{
                resposta1.style.display = 'none'
                buttonPlus.style.transform = 'rotate(90deg)'
                boxPergunta.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
        }
} )

const btnSaibaMais2 = document.querySelector('#btnSaibaMais2')
const resposta2 = document.querySelector('#resposta2')
const buttonPlus2 = document.querySelector('.fa-plus2')
const boxPergunta2 = document.querySelector('.pergunta2')

btnSaibaMais2.addEventListener('click', ()=>{
        const actualDisplayResposta2 = getComputedStyle(resposta2).display

        if(actualDisplayResposta2 === 'none'){
                resposta2.style.display = 'block'
                resposta1.style.display ='none'
                resposta3.style.display ='none'
                buttonPlus.style.transform = 'rotate(90deg)'
                buttonPlus3.style.transform = 'rotate(90deg)'
                buttonPlus2.style.transform = 'rotate(135deg)'
                boxPergunta.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
                boxPergunta3.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
                boxPergunta2.style.borderBottom = '124px solid rgba(16, 23, 88, 0.288)'
        } else{
                resposta2.style.display = 'none'
                buttonPlus2.style.transform = 'rotate(90deg)'
                boxPergunta2.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
        }
} )

const btnSaibaMais3 = document.querySelector('#btnSaibaMais3')
const resposta3 = document.querySelector('#resposta3')
const buttonPlus3 = document.querySelector('.fa-plus3')
const boxPergunta3 = document.querySelector('.pergunta3')

btnSaibaMais3.addEventListener('click', ()=>{
        const actualDisplayResposta3 = getComputedStyle(resposta3).display

        if(actualDisplayResposta3 === 'none'){
                resposta3.style.display = 'block'
                resposta1.style.display ='none'
                resposta2.style.display ='none'
                boxPergunta2.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
                boxPergunta.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
                buttonPlus.style.transform = 'rotate(90deg)'
                buttonPlus2.style.transform = 'rotate(90deg)'
                buttonPlus3.style.transform = 'rotate(135deg)'
                boxPergunta3.style.borderBottom = '124px solid rgba(16, 23, 88, 0.288)'
        } else{
                resposta3.style.display = 'none'
                buttonPlus3.style.transform = 'rotate(90deg)'
                boxPergunta3.style.borderBottom = '4px solid rgba(16, 23, 88, 0.288)'
        }
} )