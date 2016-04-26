 $(document).ready(function(){

          $('button').on('click', function(){


            $("time.timeago").timeago();

            var index = streams.home.length - 1; //the last item of home array; 

            while(index >= 0){    
              var tweet = streams.home[index];
              var $tweet = $('<div></div>');
              var $name = $('<span class="name"></span>'); 
              var name = tweet.user; 
              var clicked = jQuery.timeago(new Date()); 
              $tweet.text(tweet.message); //adds text to $tweet. //'@' + ': ' + 
              $name.text('@' + name + ': ');
              $name.prependTo($tweet);  
              $tweet.appendTo($('.container'));  //adds $tweet to $body. 
              $tweet.append('<span class="time">' + clicked + '</span>');
              index -= 1;
            }
          });


          $('name').on('click', function(){
              addTweet();
              $name.prependTo($tweet);  
              $tweet.appendTo($('.container'));  //adds $tweet to $body. 
              $tweet.append('<span class="time">' + clicked + '</span>');
          });
        
});