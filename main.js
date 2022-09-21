function calculate() {
  var height = document.getElementById('height').value
  var weigh = document.getElementById('weigh').value
  var imc = Number((weigh) / (height * height))

  const flag = document.getElementById('flag')
  const result = document.getElementById('result')
  const ratingImc = document.getElementById('ratingImc')

  if ((imc == 0) || (imc == Number.POSITIVE_INFINITY)) {
    result.innerHTML = ''
    ratingImc.innerHTML = 'Preencha os campos corretamente.'

  }
  else if (imc <= 18.5) {
    result.innerHTML = 'Seu IMC = ' + imc.toFixed(2)
    ratingImc.innerHTML = 'A classificação do seu IMC é MAGREZA.'

  } else if ((imc > 18.5) && (imc <= 24.9)) {
    result.innerHTML = 'Seu IMC = ' + imc.toFixed(2)
    ratingImc.innerHTML = 'A classificação do seu IMC é SAUDÁVEL.'

  } else if ((imc > 24.9) && (imc <= 29.9)) {
    result.innerHTML = 'Seu IMC = ' + imc.toFixed(2)
    ratingImc.innerHTML = 'A classificação do seu IMC é  SOBREPESO.'

  } else if ((imc > 29.9) && (imc <= 39.9)) {
    result.innerHTML = 'Seu IMC = ' + imc.toFixed(2)
    ratingImc.innerHTML = 'A classificação do seu IMC é OBESIDADE.'

  } else if (imc > 40) {
    result.innerHTML = 'Seu IMC = ' + imc.toFixed(2)
    ratingImc.innerHTML = 'A classificação do seu IMC é OBESIDADE GRAVE.'

  } else {
    result.innerHTML = ''
    ratingImc.innerHTML = 'Preencha os campos corretamente.'
  }

  flag.classList.add('visible')

  console.log(imc)



}





