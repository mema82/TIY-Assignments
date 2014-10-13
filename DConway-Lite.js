//This requires chai library to be used for testing

var expect = require('chai').expect;


//This is an object that has a function of holding 3 param values
//Underscore use is to keep files private and only accessed from inside this

var Cell = function(x,y, _cells){
	var me = this;


//These are the attributes of cell object that holds its own status, x and y values

	me.isAlive = false;
	me.x = x;
	me.y = y;


//This function will hold the value of this' distance whencompared to another cell

	me.distance = function(cell){


//This returns the absolute value of my arguement

		return Math.abs(cell.x - me.x) + Math.abs(cell.y - me.y);
	};

//The this neighbor cell holds value of null

	me.neighbors = null;


/*This tells this function to filer through the neighbors and
the ones that are true to the functions conditions are filtered to a new array*/

	me.countNeighbors = function(){
		return me.neighbors.filter(function(cell){
			return cell.isAlive;
		}).length;
	};

	return me;
};

//This holds the grid value with the input params to hold the width and height of this particular function

var Grid = function(width, height){
	var me = this;
	var _cells = new Array(width*height);


//This var only accessible through the grid function has an empty array to take input

	var _living = [];


/* This function goes through the cols and rows and checks their stats to return a new cell boards based
on the property operations*/

	for(var i = 0; i < width; i++){
		for(var j = 0; j < height; j++){
			(function(){
				_cells[i+j*width] = new Cell(i, j, _cells);
			})();
		}
	}


/*This function calculates the distance in EACH individual cell and will create a NEW array
with all the cells that were filtered out and called*/


	_cells.forEach(function(cell){
		cell.neighbors = _cells.filter(function(cell2){
			var dx = Math.abs(cell2.x - cell.x);
			var dy = Math.abs(cell2.y - cell.y);
			return (dx === 1 && dy === 1 ) || (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
		});
	});


//This is using the "function call" to with 1 input to hold the value of this' filter

	me.filter = function(fc){
		return _cells.filter(fc);
	};


//This holds the function value of this' updatedLiving

	me.updateLiving = function(){

//This declares all the rules of Conway's Game of Life


		var deadOvercrowded = _cells.filter(function(cell){
			return cell.isAlive && (cell.countNeighbors() > 3);
		});

		var deadUnderpop = _cells.filter(function(cell){
			return cell.isAlive && (cell.countNeighbors() < 2);
		})

		var reproduction = _cells.filter(function(cell){
			return !cell.isAlive && cell.countNeighbors() === 3;
		});

		var livesOn = _cells.filter(function(cell){
			return cell.isAlive && (cell.countNeighbors() === 2 || cell.countNeighbors() === 3);
		});

		deadOvercrowded.concat(deadUnderpop).forEach(function(cell){
			cell.isAlive = false;
		});

		reproduction.forEach(function(cell){
			cell.isAlive = true;
		});
		livesOn.forEach(function(cell){
			cell.isAlive = true;
		});

	};


//This function holds the value of this' getCell and retuns with the params and returns

	me.getCell = function(x,y){
		return _cells[x+y*width];
	};

	return me;
}

it('result should be false,')
expect(cell.me.isAlive).to.be.a('false');
