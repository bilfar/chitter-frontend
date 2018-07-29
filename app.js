fetch('https://chitter-backend-api.herokuapp.com/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });


  
