// iife -> immediately invoked function execution
// these functions ar eexecuted immediately, they do not need to be explicitly called
// they are declared by surrounding the normal functions with () and then calling them immediately

// unnamed iife
(function(){
    console.log("DB connected")
})(); // VVI -> always terminate the iife with semicolon to use next iife, otherwise error

//named iife
(function chai() {
    console.log("DB Connected")
})();
// chai() // cannot be accessed outisde iife

// parameterised iife
(function welcome(name){
    console.log(`Welcome, ${name}`);
})("Anand");

// using arrow function in iife 
( (name) => console.log(`Hello, ${name}`))("Anand");