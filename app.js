var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/palindrome', function (req, res) {
    var name = req.body.word;

    if (typeof name != 'string') {
      res.sendStatus(400);
      return;
    }

    function isPalindrome(str) {
        return boolean_v = name == str.split('').reverse().join('');
    }
    var v_bool = isPalindrome(name);

    res.send({ data:  v_bool});
});

app.post('/fibonachi', function (req, res) {
  var number = req.body.word;

  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  var fibonachi = fib(number);
  
  res.send({ data:  fibonachi});
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
