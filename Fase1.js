document.addEventListener('DOMContentLoaded', () => {
  const arrayDeCartas = [
    {
      name: '1',
      img: 'imagens/1.png'
    },
    {
      name: '2',
      img: 'imagens/2.png'
    },
    {
      name: '3',
      img: 'imagens/3.png'
    },
    {
      name: '4',
      img: 'imagens/4.png'
    },
    {
      name: '5',
      img: 'imagens/5.png'
    },
    {
      name: '6',
      img: 'imagens/6.png'
    },
    {
      name: '7',
      img: 'imagens/7.png'
    },
    {
      name: '8',
      img: 'imagens/8.png'
    },
    {
      name: '1',
      img: 'imagens/9.png'
    },
    {
      name: '2',
      img: 'imagens/10.png'
    },
    {
      name: '3',
      img: 'imagens/11.png'
    },
    {
      name: '4',
      img: 'imagens/12.png'
    },
    {
      name: '5',
      img: 'imagens/13.png'
    },
    {
      name: '6',
      img: 'imagens/14.png'
    },
    {
      name: '7',
      img: 'imagens/15.png'
    },
    {
      name: '8',
      img: 'imagens/16.png'
    }
  ]
  arrayDeCartas.sort(() => 0.5 - Math.random())
  const tabuleiro = document.querySelector('.tabuleiro')
  const resultado = document.querySelector('#pontuacao')
  const placeholder = 'imagens/Ninoaprendiz.png'
  const branco = 'imagens/certo.png'

  function criarTabuleiro() {
    for (let i = 0; i < arrayDeCartas.length; i++) {
      var carta = document.createElement('img')
      carta.setAttribute('src', placeholder)
      carta.setAttribute('data-id', i)
      carta.addEventListener('click', viraCarta)
      tabuleiro.appendChild(carta)
    }
  }

  var cartasClicadas = []
  var cartasClicadasId = []
  var cartasCombinadas = []

  function viraCarta() {
    var cartaId = this.getAttribute('data-id')
    cartasClicadas.push(arrayDeCartas[cartaId].name)
    cartasClicadasId.push(cartaId)
    this.setAttribute('src', arrayDeCartas[cartaId].img)
    if (cartasClicadas.length === 2) {
      setTimeout(checarPorCombinacao, 500)
    }
  }
  function checarPorCombinacao() {
    var cartas = document.querySelectorAll('img')
    const primeiraCarta = cartasClicadasId[0]
    const segundaCarta = cartasClicadasId[1]
    if (primeiraCarta === segundaCarta) {
      cartas[primeiraCarta].setAttribute('src', primeiraCarta)
      cartas[segundaCarta].setAttribute('src', segundaCarta)
      alert('Ha pulsado la misma tarjeta dos veces!')
    }
    else if (cartasClicadas[0] === cartasClicadas[1]) {
      cartas[primeiraCarta].setAttribute('src', branco)
      cartas[segundaCarta].setAttribute('src', branco)
      cartasCombinadas.push(cartasClicadas)
      cartas[primeiraCarta].removeEventListener('click', viraCarta)
      cartas[segundaCarta].removeEventListener('click', viraCarta)
    }
    else {
      cartas[primeiraCarta].setAttribute('src', placeholder)
      cartas[segundaCarta].setAttribute('src', placeholder)
    }
    cartasClicadas = []
    cartasClicadasId = []
    resultado.textContent = cartasCombinadas.length
    if (cartasCombinadas.length === arrayDeCartas.length / 2) {
      resultado.textContent = '¡Felicitaciones, encontraste todas las coincidencias!'
    }
  }
  criarTabuleiro()
})