//Game of life simple code test


var conway= function(cell,neighbors){
    
 if (neighbors >2){
   
    return true}
    
if (neighbors <=2 || 3){
   
    return true}
    
  
}


console.log('it should return "false"',
conway(2,1)==="false");
console.log('it should return "true"',
conway(1,3)==="true");