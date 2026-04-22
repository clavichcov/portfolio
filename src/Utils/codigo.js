/*function maxAdjacentSum(array) {
	const arrayLength = array.length;
    console.log("Longitud:", array.length);
    if (arrayLength<2){
        console.log("No hay posibles sumas");
        return 0;
    }
    const sumsPossible= arrayLength-1;
    let sum=0;
    let i=0;
    let mayor=0;
    console.log('Sumas psosibles=',sumsPossible);
    for(i=0; i<arrayLength-1; i++){
        
        console.log('numeros:',array[i], '+',array[i+1]);
        sum=array[i]+array[i+1];
        console.log('suma=',sum);
        if (mayor<sum){
            mayor=sum;
        }    
                
        
    }
    console.log("suma mayor=",mayor);
    return mayor;
}
maxAdjacentSum([ 9, 24, 16, 15, 12 ]);
maxAdjacentSum([ 9, 12 ]);
maxAdjacentSum([ 9 ]);*/
/*function main() {
	console.log("Hello world");
	return "Hello world";
}
main();*/
/*function fizzbuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (number % 3 == 0) {
            console.log("FIZZ");
        } else if (number % 5 == 0){
            console.log("BUZZ");
        
            } else console.log(number);
    return;
}
fizzbuzz(6);
fizzbuzz(10);
fizzbuzz(15);
fizzbuzz(7);
*/
function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    const lengthResponseTimes = responseTimes.length;
    let i = 0;
    let average= 0;
    let sum = 0;
    let cont = 0;
    let y= 0;
    
    for (i=0; i<lengthResponseTimes; i++){
        console.log("i=",i);
        sum=0;
        if(i!=0){
            for (y=0; y<=i;y++){
                console.log("y=",y);
                if (y<i){
                    sum=sum+responseTimes[y];
                    console.log("sum=",sum);
                }
                
            }  
            average=sum/i;  
            console.log("prom=",average);
            if(responseTimes[i]>average) cont++;
        }
        
        
    }

    console.log("Cantidad numeros mayores al promedio=",cont);
    return cont;
}

countResponseTimeRegressions([100, 200, 150,300]);
countResponseTimeRegressions([1]);
countResponseTimeRegressions([1, 100]);