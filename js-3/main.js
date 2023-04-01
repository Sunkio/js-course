// Strings
function js3 () {
    console.log("JS-3: START");
    const myVariable = "Mathematics";
    // The length property
    console.log("Every good boy does fine".length);

    //String Methods
    //charAt()
    console.log(myVariable.charAt(0));
    //indexOf() - position of the first occurence of a character
    console.log(myVariable.indexOf("at")); // returns 1
    //lastIndexOf() - position of the last occurence of a character
    console.log(myVariable.lastIndexOf("at")); // returns 6
    //slice() - extracts a part of a string and returns the extracted part in a new string
    console.log(myVariable.slice(5, 8)); // returns "mat"
    console.log(myVariable.slice(5)); // returns "matics"

    //toUpperCase() - converts a string to uppercase letters
    console.log(myVariable.toUpperCase());
    //toLowerCase() - converts a string to lowercase letters
    console.log(myVariable.toLowerCase());

    //includes() - checks whether a string contains the specified string/characters
    console.log(myVariable.includes("math")); // returns false
    console.log(myVariable.includes("Math")); // returns true

    //split() - splits a string into an array of substrings
    console.log(myVariable.split("")); // returns ["M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"]
    console.log(myVariable.split("a")); // returns ["M", "them", "tics"]
    console.log("JS-3: END");
}

export { js3 };