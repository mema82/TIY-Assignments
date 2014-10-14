module.exports = Game;

function board() {
    return [
        [false, false, false],
        [false, false, false],
        [false, false, false],
        ];
}

function Game(){
    this.board = board();
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
 
 Game.prototype.isAlive = function(x, y) {
     
 }
 
 /**
  * Make the cell at {x,y} "alive"
  * 
  * @param Number x coordinate
  * @param Number y coordinate
  * @return undefined
  */
  
  Game.prototype.setAlive = function(x, y){
      
  }
  
 /**
  * Make cell ar {x,y} "dead"
  * 
  * @param Number x coordinate
  * @param Number y coordinate
  * @return undefined
  */
  
  Game.prototype.setDead = function(x,y) {
      
  }
  
/**
 * Update the 'board' by applying the 'rules' to each cell.
*/

Game.prototype.tick = function() {
//Start with a fresh board
//Apply 'rules' to each cell in the current board
//record the results of 'rules' in tihe new board
//Update the current board to match the new board
}

/**
 * What goes here?
*/

Game.prototype.rules = function(){
    
}

/**
 * WARNING: This is VOODOO MAGIC...
 * Given:
 * this.board === [
 *  [ false, false, false ],
    [ false, false, false ],
    [ false, false, false ],
    ];
 */
 
 Game.prototype.display = function() {
     var spacer = '+---+---+---+\n';
 
 return spacer +
 
 //Apply 'renderRow' to each 'row' in 'board'
    this.board.map(function renderRow(row) {
        return '|' +
        
//Apply 'renderCell' to each 'cell' in 'row'        
  row.map(function renderCell(cell){
      
    //return 'X' if 'cell' is TRUTHY otherwise return ' '
        return cell && 'X' || ' ';
    
  }).join(' | ')//Place ' | ' between each 'cell'
  + ' |\n';
  +spacer;
}); // END DISPLAY

