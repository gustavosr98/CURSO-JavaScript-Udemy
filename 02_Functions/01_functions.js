let convertFarenheitToCelsius = function(Farenheit = 0){
    return (Farenheit - 32) * (5/9);
}

for( let i = 0; i <= 32; i++)
    console.log( convertFarenheitToCelsius(i) )