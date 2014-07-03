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

var str = "foo bar baz";

str.replace(/ba/gi, '');

console.log(str);





});

 

 
