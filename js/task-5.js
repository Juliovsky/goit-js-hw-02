"use strict";

const checkForSpam = function(message) {
  const forbiddenWord = "sale";
  const forbiddenWord2 ="SPAM";
  if (message.includes(forbiddenWord)||message.includes(forbiddenWord2)){
      return true;
  }
  return false;
  };
  

  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true