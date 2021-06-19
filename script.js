const arrayList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function myfunction(num){
 var i;
    for(i = 1; i <= num.length; i++){

         if(i % 3 == 0 && i % 5 == 0){
             console.log( i + " FizzBuzz");

         }else if(i % 3 == 0 ){

            console.log( i + " Fizz");
    
        }else if(i % 5 == 0){

            console.log(i + " Buzz");
        }else{

            console.log(i);
        }

    }


}
myfunction(arrayList);