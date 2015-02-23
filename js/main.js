var blueberries =  {
	fruit: 'Blueberries',
	latin: 'Vaccinium corymbosum',
	energy: 240,
	grows: true,
	carbohydrates: 14.49,
	protein: 0.74,
};

var grapes =  {
	fruit: 'Grapes',
	latin: 'Vitis vinifera',
	grows: false,
	energy: 288,
	carbohydrates: 18.1, 
	protein: 0.72,
};

var redCurrant =  {
	fruit: 'Red Current',
	latin: 'Ribes Rubrum',
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
	document.write('<dd>' + fruits.energy + 'KJ</dd>');

	document.write('<dt>carbohydrates</dt>')
	document.write('<dd>' + fruits.carbohydrates + 'g</dd>');

	document.write('<dt>protein</dt>')
	document.write('<dd>' + fruits.protein + 'g</dd>');
	
	document.write('</dl>');
};

var allFruits = [blueberries, grapes, redCurrant];

allFruits.forEach(writeFruit)