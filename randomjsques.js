//find the occurance of each elemt in below array
const fruits =['apple','banana','mango','mango','apple','mango'];

let count ={};
for(elem of fruits){
  if(count[elem]){
    count[elem]=count[elem]+1;
  }else{
    count[elem]= 1;
  }
}
console.log(count);