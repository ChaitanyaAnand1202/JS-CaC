function showLoginName(username){
    return `${username} just logged in`
}

console.log(showLoginName("Anand"));
console.log(showLoginName(null)) // shows null
console.log(showLoginName()) // shows undefined

// to handle this absence of values, 2 ways -> check before return or assign a default value to the parameter
function showLoginName2(username){
    if(username === undefined){    // or just -> if(!undefined){}
        console.log("Please enter a name");
        return;
    } 
    return `${username} just logged in`
}

console.log(showLoginName2("Anand"))
console.log(showLoginName2(null));
console.log(showLoginName2()); // this will print undefined because nothing is returned from funciton

// second method
function showLoginName2(username = "sam"){
    return `${username} just logged in`
}

console.log(showLoginName2("Anand"))
console.log(showLoginName2(null));
console.log(showLoginName2()); // this will print sam by default


