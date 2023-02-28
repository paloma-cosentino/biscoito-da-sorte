const luckPhrases = [
  'A persistência realiza o impossível.',
  'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
  'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
  'É parte da cura o desejo de ser curado.',
  'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
  'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
  'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
  'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
  'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.',
  'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.'
]
let randomNumber = Math.round(Math.random() * 10);
let chosenPhrase = luckPhrases[randomNumber]

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const phrase = screen2.querySelector('p')

const luckybiscuit = document.querySelector('#btnBiscuit')
const resetButton = document.querySelector('#btnReset')

function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleBiscuitClick(){
 toggleScreen()
 phrase.innerHTML = `${chosenPhrase}`
}

function handleResetButton(){
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10);
  chosenPhrase = luckPhrases[randomNumber]
}

luckybiscuit.addEventListener('click', handleBiscuitClick)
resetButton.addEventListener('click', handleResetButton)