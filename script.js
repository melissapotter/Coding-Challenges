const url = 'https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api';
const data = {username: 'Melissa', password: '1234'};

function postData(){
fetch(url, {
  method: 'POST', 
  body: JSON.stringify(data), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
}

// or 
// .then(async function(response){
//     const res = await response;
//     console.log(res);
//     });
// }

// aync promises

// arrow function 
// .then(response => console.log(response))

// traditional 
// .then(function(reponse){
    
// });