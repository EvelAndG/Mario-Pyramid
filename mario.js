let height = prompt("Enter height for pyramid: ");
printPyramid(height);


function printPyramid(height) {
  var height;
  var numBricks = 0;
  var numSpaces = 0;


  for (var row = 0; row < height; row++) {
    var layer = "";  
    
    numBricks = row + 2;
    numSpaces = height - row - 1;

    for (var i = 0; i < numSpaces; i++) {
        layer += " ";
    }
    for (var i = 0; i < numBricks; i++) {
        layer += "#";
    }

      console.log(layer);
  }
    
      
}
