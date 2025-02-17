//Write a function to fetch data from an API and handle errors using async/await.

async function random(){
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
  var fetch = await(url)
  try{
      const url = "https://example.org/products.json";
      var fetch = await(url)
      console.log(fetch.ok)
      if(fetch.ok){
          console.log("response status ",fetch.status)
          console.log("fetched data",fetch.json)
      }else{
          console.log("error in else block")
      }
  }
  catch{
      console.log("error occured in catch block")
  }
}

random();

/*how to make mongodb relational db
there are 3 ways to do that
1. denormaliation(Embedding )
2.normalization(Referencing )
3. Many-to-Many Relationship (Using an Array of References)
*/



//closure example
function outer() {
    let count = 0;
     function inner() {
        console.log("count1",count)
        count++;
        console.log(count);
    };
    return inner;
}

const counter = outer();
counter(); // ?1
counter(); // ?2
counter(); // ?3

///////////Write an Express.js middleware that logs request details.

var express= require ('express');
var app = express();

app.use(function(req,res,next){
    res.send("this is middleware")
    next();
})

app.get('/login',function(){
    console.log("login page")
})

app.listen('/300'(req,res))
{
    res.send("server listening at",3000)
}

// Closure in a Loop
// Question: Fix the issue in this code so that it prints 0 1 2 3 4 instead of 5 5 5 5 5.

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

//answer, do google it why it is happing
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}