/* global $*/
var form = $('form');
var tweetBoxField = $('.tweetbox__field');



function update(){
// clone the top tweet to use as the template newTweet
var newTweet = $('.tweet').first().clone();   


// get what the user entered as newContent
  
    var newContent = tweetBoxField.val();

// replace the text in the newTweet with the user's new content and time    
    // var now = $.now();
    newTweet.find('.tweet__content').text(newContent);
    newTweet.find('.tweet__time').text('now');
    
// render the newTweet by prepending it to the .tweets section
    $('.tweets').prepend(newTweet);
    $('.tweetbox__field').val(''); 
}

form.on('submit',function (event){
    event.preventDefault();
    update();
    
})


