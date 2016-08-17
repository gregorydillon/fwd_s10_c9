/* global $*/
var form = $('form');
var tweetBoxField = $('.tweetbox__field');

// clone the first tweet to use as the template newTweet
var newTweet = $('.tweet').first().clone();

function update(){
// get what the user entered as newContent
var newContent = tweetBoxField.val();  

// replace the text in the newTweet with the user's new content and time    
   newTweet.find('.tweetbox__field').text(newContent);
   newTweet.find('.tweet__time').text('now');
   
    
// render the newTweet by prepending it to the .tweets section
// the close the update function
    $('.tweets').prepend(newTweet);
    $('.tweetbox__field').val('');
}

// magic language
form.on('submit',function (event){
    event.preventDefault();
    update();
    
})


