const sumAll = function(number_1, number_2) {

    var sum = 0;

    if (number_1 > 0 && number_2 > 0 && typeof(number_1) === "number" && typeof(number_2) === "number") {

    if (number_1 > number_2) {
        for(var i = number_2; i <= number_1; i++)
        {
            sum += i;
        }
    }
    else if (number_1 < number_2){
        for (var i = number_1; i <= number_2; i++) {
            sum += i;
        }
    }

}

else {
    return 'ERROR';
}
    
return sum;
    

};

// Do not edit below this line
module.exports = sumAll;
