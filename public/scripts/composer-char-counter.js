$(document).ready((event) => {

  
  let  text = $('#tweet-text').on("keyup", event => {
    let maxLength = 140;
    let length = $(text).val().length;
    length = maxLength - length;
    $(this.counter).text(length);
    
    let counter = $(this.counter);
    if (length < 0) {
      counter.css("color", "#ff0000");
    } else {
      counter.css("color", "#545149");
    }
  });
  
});
  
