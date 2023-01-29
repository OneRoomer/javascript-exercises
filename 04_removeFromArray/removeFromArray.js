const removeFromArray = function(myArray, outsider_1, outsider_2, outsider_3, outsider_4) {

    const myHelpArray = Array.from(myArray);

    for (var i = 0; i <= myArray.length; i++){
        if (myHelpArray[i] === outsider_1){
            myHelpArray.splice(i, 1);
        }
    }

    for (var i = 0; i <= myArray.length; i++){

        if (myHelpArray[i] === outsider_2) {
            myHelpArray.splice(i, 1);
        }
    }

    for (var i = 0; i <= myArray.length; i++){

        if (myHelpArray[i] === outsider_3) {
            myHelpArray.splice(i, 1);
        }
    }

    for (var i = 0; i <= myArray.length; i++){

        if (myHelpArray[i] === outsider_4) {
            myHelpArray.splice(i, 1);
        }
    }
    return myHelpArray;

};

// Do not edit below this line
module.exports = removeFromArray;
