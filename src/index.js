const express = require('express');

const app = express();

app.get('/', function(request, response) {
  return response.json({ 
    message: 'Hello World Ignite',
  });
});

app.listen('3333', function() {
  console.log('Server is running');
});