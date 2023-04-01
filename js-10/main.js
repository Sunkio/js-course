// User Input
function js10 () {
    console.log("JS10: START");
// User Input 1: alert()
    alert("Hello World");

// User Input 2: confirm()
    let myBoolean = confirm("Ok === True\nCancel === False");
    console.log(myBoolean);

// User Input 3: prompt()
// cancel retruns null => you have to check for null!
    let name = prompt("What is your name?");
    if (name.trim()) {
        console.log(`Hello ${name}! :)`);
    } else {
        console.log("You didn't enter a name!");
    }
    console.log("JS10: END");
};

export { js10 };