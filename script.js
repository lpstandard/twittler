$(document).ready(function(){

  $('button').on('click', function(){

    $("time.timeago").timeago();

    var index = streams.home.length - 1; //initial index is 9 for home array; 
      while(index >= 0){      //as long as there tweets in the streams.home array, keep generating tweets.
        var tweet = streams.home[index];
        var $tweet = $('<div class="tweet '+ tweet.user +'"></div>');
        var $name = $('<span class="name"></span>'); 
        var names = tweet.user; 
        var timeStamp = jQuery.timeago(new Date()); 
        $tweet.text(tweet.message); //adds text to $tweet. //'@' + ': ' + 
        $name.text('@' + names + ':');
        $name.prependTo($tweet);  
        $tweet.appendTo($('.container'));  //adds $tweet to $body. 
        $tweet.append('<span class="time">' + timeStamp + '</span>');
        index -= 1;
      }
      $('.name').on('click', function(){
        var userName = $(this).text();
        userName = userName.slice(1, userName.length - 1);
        $(".tweet:not(."+userName+')').remove();

      });             
  });
});
