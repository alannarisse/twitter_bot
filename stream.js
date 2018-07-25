var TwitterPackage = require('twitter');


// keep api keys in a config file. I've saved a config-exampe.js 
// file for you to rename to config.js and and modify.
var secret = require('./config');



var Twitter = new TwitterPackage(secret);

// This stream listens for any instance of the word javascript 
// in a tweet. try modifying it or try adding a response.
var stream = Twitter.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log("listening for javascript tweets. press control + C to end stream.");
  console.log(event && event.text);
});

stream.on('error', function(error) {
  throw error;
});