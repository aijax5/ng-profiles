function gotPhoto(element) {
  var file = element.files[0];
  // var reader = new FileReader();
  var reader = new FileReader();
    reader.onload = function(e) {
         // Create a new image.
         var img = new Image();
      console.log(file);
         img.src = reader.result;
         localStorage.theImage = reader.result; //stores the image to localStorage
         $(".imagearea").html(img);
      console.log(reader.result)
     };

     reader.readAsDataURL(file);//attempts to read the file in question.
}
// Saved to localstorage
function getPhoto() {
  var base64 = localStorage["file"];
  var base64Parts = base64.split(",");
  var fileFormat = base64Parts[0].split(";")[1];
  var fileContent = base64Parts[1];
  var file = new File([fileContent], "file name here", {
      type: fileFormat
  });
  // return file;
  console.log(file);
}