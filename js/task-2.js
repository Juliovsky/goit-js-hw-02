"use strict";

const calculateEngravingPrice = function(message, pricePerWord) {

    let calculateEngravingPriceString = message.split(' ');

    let totalPrice = calculateEngravingPriceString.length*pricePerWord;

    return totalPrice;
  };
  

  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  );
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); 
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); 
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); 