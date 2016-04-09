
function myFunction() {
    var node = document.createElement("LI");                
    var textnode = document.createTextNode("NEWWW PARAGRAPH #javascript #swag");         
    node.appendChild(textnode);                            
//    document.getElementById("demo").innerHTML = "NEWWW PARAGRAPH #javascript #swag";
    document.getElementById("demo").appendChild(node);
}

