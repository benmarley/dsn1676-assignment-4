//alert('Hello!');



var blueberries =  {
	fruit: 'blueberries',
	latin: 'vaccinium corymbosum',
	energy: 240,
	grows: true,
	carbohydrates: true,
	protein: 0.74,
};

var grapes =  {
	fruit: 'grapes',
	latin: 'Vitis vinifera',
	grows: false,
	energy: 288,
	carbohydrates: 18.1, 
	protein: 0.72,
};

var redCurrant =  {
	fruit: 'Red Current',
	latin: 'Ribes Rebrum',
	grows: false,
	energy: 288,
	carbohydrates: 18.1, 
	protein: 0.72,
};

var writeFruit = function (fruits) {
	document.write('<h1>' +  fruits.fruit + '</h1>');
	
	document.write('<dl>');
	
	document.write('<dt>latin</dt>')
	document.write('<dd>' + fruits.latin + '</dd>');

	document.write('<dt>grows</dt>')
	document.write('<dd>' + fruits.grows + '</dd>');

	document.write('<dt>energy</dt>')
	document.write('<dd>' + fruits.energy + 'kj</dd>');

	document.write('<dt>carbohydrates</dt>')
	document.write('<dd>' + fruits.carbohydrates + 'g</dd>');

	document.write('<dt>protein</dt>')
	document.write('<dd>' + fruits.protein + 'g</dd>');
	
	document.write('</dl>');
};

writeFruit(blueberries);
writeFruit(grapes); 
writeFruit(redCurrant);


var allFruits = [blueberries, grapes, redCurrant];

allFruits.forEach(writeFruit)