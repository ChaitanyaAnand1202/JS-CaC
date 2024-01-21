const promiseOne = new Promise(function(resolve, reject){
  // do something
  setTimeout(function(){
    console.log("Async Task being done");  
    resolve()
  }, 2000)
})

promiseOne.then(()=> {
  console.log("Async task completed");
})


new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2 being done");
    resolve()
  }, 3000)
}). then(()=> {
  console.log("Async task 2 completed");
}).then(()=> {
  console.log("Following Async task 2");
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    const user = {
      username: "Anand",
      email: "Anand@gmail.com"
    }
    resolve(user)
  }, 4000)
})

promiseThree.then(function(user){
  console.log(user);
  return user.username;
}). then(function(username){
  console.log(username);
})



const promiseFour = new Promise(function(resolve, reject){
  let error = true;
  if(!error){
    setTimeout(function(){
      const user = {
        username: "Chaitanya Anand",
        email: "Chaitanya@gmail.com"
      }
      resolve(user)
    }, 5000)
  }
  else {
    reject("Some error occured in task 4")
  }
})

promiseFour.then(function(user){
  console.log(user);
  return user.username;
}).then(function(username){
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(function(){
  console.log("Task 4 either completed or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
  let error = false;
  if(!error){
    setTimeout(function(){
      const user = {
        username: "Chaitanya Anand",
        email: "Chaitanya@gmail.com"
      }
      resolve(user)
    }, 5000)
  }
  else {
    reject("Some error occured in task 5")
  }
});

(async () => {
  try{
    const response = await promiseFive
    console.log("Promise 5 response", response);
  }
  catch{
    console.log("Some error occured in task 5");
  }
})();



// fetch("https://api.giub.com/users/ChaitanyaAnand122").then(function(response1){
//   console.log((response1));
// }).catch(function(error){
//   console.log("Error occured");
//   console.log(error);
// })

async function githubAPI(){
  try{
  const response2 = await fetch("https://api.github.com/users/ChaitanyaAnand1202");
  const responseJson = await response2.json();
  console.log("response is : ", responseJson);
}
catch(error){
  console.log(error);
}}

githubAPI()

// async function githubAPI(){
//   const response = await fetch("https://api.github.com/users/ChaitanyaAnand1202");
//   console.log(response);
// }