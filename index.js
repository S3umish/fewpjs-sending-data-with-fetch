// Add your code here
// method: "POST" is missing from the object below

function submitData (name, email ) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        } )
        
  } )
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object)
    document.body.innerHTML = object ["id"];
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
    document.body.innerHTML = error.message
  }); 
       

}



