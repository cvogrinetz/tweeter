/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready( (event) => {


const createTweetElement = (tweetObject) => {
  const $tweet = `

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
  `;

  return $tweet;
  
};
  

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}
  

const $tweet = createTweetElement(tweetData);

console.log($tweet);
$('.tweetContainer').append($tweet);

});
