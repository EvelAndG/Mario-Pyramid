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
        layer += ".";
    }
    for (var i = 0; i < numBricks; i++) {
        layer += "#";
    }

      console.log(layer);
			//create a paragraph element
      let para = document.createElement("p");

      //create text
      let node = document.createTextNode(layer);

      //add the text to the paragraph element
      para.appendChild(node);

      //create a variable to reference the div element
      let element = document.getElementById("pyramid");

      //add the paragraph element to the div element      
      element.appendChild(para);
  }

	var el = document.getElementById("construction");
	el.remove();
	
    
      
}
