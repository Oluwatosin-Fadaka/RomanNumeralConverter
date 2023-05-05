function convertToRoman(num) {
  // create a roman numeral table
  const  romanNumeralTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
    
     }

  let romanNumeral = '';

  for (const key in romanNumeralTable)  {
    const  value = romanNumeralTable[key];

    while (value <= num)   { 
      num -=  value;
      romanNumeral += key;
      
    }

    }
      
  
   return  romanNumeral ;
}

convertToRoman(36);
