// in forEach loop there is function given as parameter that itself takes each element as parameter
// VVI -> forEach does not return anything and the function in forEach also does not return anything


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val);
} )

// using arrow function
coding.forEach( (lang) => {
    // console.log(lang);
} )

// using some predefined function -> the function is called for each array element
function display(val){
    // console.log(val);
}
coding.forEach( display );

// apart from the array element -> also access the index and the whole array in each iteration
coding.forEach( (val, index, arr) => {
    // console.log(`${val} , ${index}, ${arr}`);
} )


// real world use case -> the data returned from api calls is usually in form of array of objects,
// so forEach is useful to access each object separately

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(`${item.languageName} files have the extension ${item.languageFileName} `);
} )

// forEach does not return anything
// console.log(myCoding.forEach( (item) => {
//     console.log(`${item.languageName} files have the extension ${item.languageFileName} `);
// } )) // undefined output

// the callback function in forEach also doesnt return anything
let newCoding = myCoding.forEach( (item) => {
    console.log(`${item.languageName} files have the extension ${item.languageFileName} `);
    return item.languageName + item.languageFileName;
} )

console.log(newCoding); // nothing is assigned to this variable since the callback does not return anythin