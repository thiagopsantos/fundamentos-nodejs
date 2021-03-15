const express = require('express');

const app = express();
app.use(express.json());

app.get('/', function(request, response) {
  return response.json({
    message: 'Hello World Ignite',
  });
});

app.get('/courses', function(request, response) {
  const query = request.query;
  console.log(query);

  return response.json(['Curso 1', 'Curso 2', 'Curso 3']);
});

app.post('/courses', function(request, response) {
  const body = request.body;
  console.log(body);

  return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.put('/courses/:id', function(request, response) {
  const params = request.params;
  console.log(params);

  return response.json(['Curso 5', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.patch('/courses/:id', function(request, response) {
  return response.json(['Curso 5', 'Curso 6', 'Curso 3', 'Curso 4']);
});

app.delete('/courses/:id', function(request, response) {
  return response.json(['Curso 5', 'Curso 6', 'Curso 3']);
});

app.listen('3333', function() {
  console.log('Server is running');
});
