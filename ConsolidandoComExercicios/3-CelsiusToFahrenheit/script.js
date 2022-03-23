/*
  Celsius to Fahrenheit

    Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

    Desafio:
      Crie uma função que receba uma string em celsius ou fahrenheit
      e faça a transformação de uma unidade para outra.

        C = (F - 32) * 5/9 
        F = C * 9/5 + 32
*/

//Minha tentativa

function temperatureConverter(temperature) {
  
  let celsius = temperature.toUpperCase().includes('C');
  let fahrenheit = temperature.toUpperCase().includes('F')
  
  // let convertedInArray = temperature.split('');
  // let getNumber = convertedInArray.slice(0,2);
  // let getNumberJoin = getNumber.join('');

  let getNumberCelsius = temperature.toUpperCase().replace('C', '');
  let getNumberFahrenheit = temperature.toUpperCase().replace('F', '');

  let convertFahrenheitToCelsius = (Number(getNumberFahrenheit) - 32) * 5/9;

  let convertCelsiusToFahrenheit = (Number(getNumberCelsius) * 9/5) + 32;

  let convertedValue;

  if (!celsius && !fahrenheit) {

    convertedValue =  `Unidade de temperatura não reconhecida.`

  }else if(celsius){

    convertedValue = `O valor de ${getNumberCelsius}°C convertido para fahrenheit é ${convertCelsiusToFahrenheit.toFixed(2)}°F.`;

  }else if(fahrenheit) {

    convertedValue = `O valor de ${getNumberFahrenheit}°F convertido para celsius é ${convertFahrenheitToCelsius.toFixed(2)}°C.`;

  }

  return convertedValue;
}

console.log(temperatureConverter("120C"));


//Versão do mayk

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  //Fluxo de Erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }
  
  //fluxo ideal, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F",""));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9;
  let degreeSign = 'C';

  //Fluxo alternativo
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C",""));
    formula = celsius =>  celsius * 9/5 + 32
    degreeSign = 'F';
  }

  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree('10C'));
  console.log(transformDegree('50F'));
  transformDegree('50Z');
} catch (error) {
  console.log(error.message);
}