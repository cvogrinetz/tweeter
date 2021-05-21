/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready( (event) => {


  // Will render each seperate tweet to page.
const renderTweets = function(tweets) {
  for (const element of tweets) {
    let tweets = createTweetElement(element);
    $('.tweetSection').prepend(tweets)
  }
};

// Escape function that stops cross-site script
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


// Scroll to top button functionality
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#scrollToTop').fadeIn();
  } else {
      $('#scrollToTop').fadeOut();
  }
});
$(document).ready(function() {
  $("#scrollToTop").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});


// Ajax GET request to render tweets right when page loads
$.ajax('/tweets', {method: 'GET'})
      .then(function (tweets) {
      renderTweets(tweets);
    });


// Creates new tweet structure from incoming data.
const createTweetElement = (tweetObject) => {
  const $tweet = 

 `<article class="tweetContainer">
  <header class="tweetHeader">

    <div class="tweetName">
      <div><img src=${escape(tweetObject.user.avatars)}></div>
      <div class="tweetName">${escape(tweetObject.user.name)}</div>
    </div>
      
    <div>${escape(tweetObject.user.handle)}</div>

  </header>


  <div class="tweetContent">
    <div>${escape(tweetObject.content.text)}</div>
  </div>

    
  <footer class="tweetFooter">

    <div>${escape(timeago.format(new Date(tweetObject.created_at)))}</div>
    
    <div class="footerIcons">
      <div class="fas fa-flag fa-lg" ></div>
      <div class="fas fa-retweet fa-lg"></div>
      <div class="fas fa-heart fa-lg"></div></div>
    </div>

  </footer>
  </article>`;

  return $tweet;
  
};

      
// Ajax Post and Get request to grab tweet info and then render it to page AFTER new tweet created.  
const loadTweets = () => {



  $('#form').submit(function (event) {

    let data = {
      text: $('#tweet-text').val()
    };


    // If there is NO input this error message will prompt user
    if (!data.text.length) {

      $('.error').remove();
      $('#new-tweet').removeClass('error')
      
      $('#new-tweet').addClass('error')
      $('#error').after(`<span class="error"><i class="fas fa-cat"></i>Cat got your tongue? Dont't be shy, try again!<i class="fas fa-cat"></i></span>`)
      event.preventDefault();
    }
    // If the maximum character limit is exceeded then this error message will prompt user  
    if (data.text.length > 140) {
      
      $('.error').remove();
      $('#new-tweet').removeClass('error')

      $('#new-tweet').addClass('error')
      $('#error').after(`<span class="error"><i class="fas fa-bomb"></i>System will overload if you don't settle down. Try again but with smaller words!<i class="fas fa-bomb"></i></span>`)
      event.preventDefault();
    }

    // If all is good with the input form then this will run and render the tweets proper
    if (data.text.length && data.text.length <= 140) {
      $('.error').remove();
      $('#new-tweet').removeClass('error')
      event.preventDefault();
     
    let message = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: message,
      })
      .done((event) => {
        // $('.tweetSection').html('')
        $.ajax('/tweets', {method: 'GET'})
        .then(function (tweets) {
          $('.tweetSection').prepend(createTweetElement(tweets[tweets.length - 1]));
          $('#counter').text(140);
          $('#form')[0].reset();
        });
      });
    };
  }); 
}

loadTweets();

})