const reverseString = function(string) {

    const myArray = string.split("");
    var reverseString ="";

    //Reverse the split String
    for (var i = 1; i <= myArray.length; i++) {
        reverseString += myArray[myArray.length-i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
