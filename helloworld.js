var express = require('express');
var app = express();
app.set('port',process.env.PORT || 5000);
app.get('/', function (req, res) {
  res.send('Hello World Versão 4.0!');
});


app.listen(app.get('port'), function () {
  console.log('Escutando na porta ', app.get('port'));
});