/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready( (event) => {


  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const renderTweets = function(tweets) {
  for (const element of tweets) {
    let tweets = createTweetElement(element);
    $('.tweetSection').prepend(tweets)
  }
};





const createTweetElement = (tweetObject) => {
  const $tweet = 

 `<article class="tweetContainer">
  <header class="tweetHeader">

    <div class="tweetName">
      <div><img src=${tweetObject.user.avatars}></div>
      <div class="tweetName">${tweetObject.user.name}</div>
    </div>
      
    <div>${tweetObject.user.handle}</div>

  </header>


  <div class="tweetContent">
    <div>${tweetObject.content.text}</div>
  </div>

    
  <footer class="tweetFooter">

    <div>${timeago.format(new Date(tweetObject.created_at))}</div>
    
    <div class="footerIcons">
      <div class="fas fa-flag fa-lg" ></div>
      <div class="fas fa-retweet fa-lg"></div>
      <div class="fas fa-heart fa-lg"></div></div>
    </div>

  </footer>
  </article>`;

  return $tweet;
  
};


renderTweets(data);



$('#form').submit(function (event) {
  
  event.preventDefault();
  let message = $(this).serialize();
  $.ajax({
      type: "POST",
      url: "/tweets",
      data: message,
      });
  })





});
