$(document).on('ready', function() {
  
//problem 1//
/*function getInfo(name, age) {


	alert(age);
}


getInfo(name = "Luisa", age = 25);*/

//Just practice for calculating
/*function totalLetters(w1, w2, w3) {
	
	var total = w1.length + w2.length + w3.length;

	return total;
	

}

console.log(totalLetters('javascript', 'is','awesome'));*/

/*function totalLetters(words) {

		var count = 0;
		for (var i=0; i<words.length; i++){
			count += words[i].length;

		}
			return count;
	}



 
console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));*/


/*function keyValue(city) {

	var obj = {
		city: city,
		 
	};
	return obj;
}
	
console.log(keyValue('Denver'));*/


/*function negativeIndex(array, index) {

	  var arr = array.length + index;
	  	return array[arr]
}

console.log('negativeIndex', negativeIndex(['a', 'b', 'c', 'd', 'e']));
		



console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['Jerry', 'Sarah', 'Sally'], -1));*/

 

 //1. set function 2. loop through string w/ 'for' 
 //originally had "word" in for loop.  Needed to use mySplitResult instead


 /*function removeM(word) {

 	var mySplitResult = word.split("m");
 		console.log(mySplitResult);
 	
 	for(i=0; i<mySplitResult.length; i++) {

 		 document.write(mySplitResult[i]);
 		
 		}
 	
 }

removeM('family')*/


 //take a single arugment to print to console log
//notice new "for" syntax while looping through objects
function printObject(keyPairs) {

	for(key in keyPairs) {
		console.log(key, " is ", keyPairs[key]);
	}
 		
}
		 
printObject({a:10, b:20, c:30});
printObject({firstName; 'pork', lastName: 'chops'}),



  

});


 

 
