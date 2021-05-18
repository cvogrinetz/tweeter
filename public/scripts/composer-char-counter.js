$(document).ready( (event) => {

  console.log("This is one good event", event)
});

let  text = $('#tweet-text').on("keyup", event => {
  // console.log("THROW IT INTO THE FIRE", event)
  let maxLength = 140;
  let length = $(text).val().length;
  length = maxLength-length;
  $('#counter').text(length);
  console.log(length)
});
  
    
