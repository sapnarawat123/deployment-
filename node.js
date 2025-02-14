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

