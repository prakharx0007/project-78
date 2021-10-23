var images = ["download.png", "https://image.shutterstock.com/image-vector/working-mom-260nw-158801603.jpg", "dad.jpg", "sister.png", "download.jpg", ];
var names = [ "Our Family", "Mom", "Dad", "Sister", "Me"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}