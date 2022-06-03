const request = require('request');
const fs = require("fs");
const { exec } = require("child_process");
var readline = require('readline');
require('dotenv').config();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//re-enable these when you want them
// fs.writeFile('listlink.txt', "", function (err) {if (err) throw err});
// fs.writeFile('listname.txt', "", function (err) {if (err) throw err}); 

rl.question("Enter YouTube Query: ", function(answer) {
  console.log("You have searched:", answer);

  

  request('https://www.googleapis.com/youtube/v3/search?part=id&maxResults=50&type=video&q=' + answer + '&key=' + process.env.KEY, function (error, response, body) {
    if(error != null){console.error('error:', error);}
    console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    fs.writeFile('full.txt', body, (err) => {
      if (err) throw err;
    });
    for(i in JSON.parse(body).items){
      fs.appendFile('listlink.txt', "https://youtube.com/watch?v=" + JSON.parse(body).items[i].id.videoId +'\n', function (err) {
          if (err) throw err;
      });
      request('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + JSON.parse(body).items[i].id.videoId + '&key=' + process.env.KEY, function (error, response, bodya) {
        var name = JSON.parse(bodya).items[0].snippet.title
        console.log(name)
        fs.appendFile('listname.txt', name +'\n', function (err) {
           if (err) throw err;
        });
      });
    }
  });

  rl.close();
});
