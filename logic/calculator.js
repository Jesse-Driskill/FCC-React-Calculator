
// 7+
// 7*7* ---> [["7"], [*], ["7"], [*]] ---> ["7", "*", "7"] 


function calculateFromString(string) {

    //this function only fires when the equals button is pressed
    let arr = string.split("");
    console.log(arr);
    let operandCount = 0;
    let operands = {
        "*": true,
        "/": true,
        "+": true,
        "-": true
    }
    let storage = [];
    let currentArray = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        if (operands[el] === undefined) {
            //if current element is a number, push it into a temporary number array
            currentArray.push(el);
            if (i === arr.length - 1) {
                //if we have arrived at the last index of the array, add the temporary 
                //number array to the 2d array storing the expression
                storage.push(currentArray);
            }
        } else {
            //otherwise add one to the operand count
            storage.push(currentArray);
            //push the temporary number array into the 2d array
            currentArray = [];
            if (i !== arr.length - 1) {
                operandCount += 1;
                //if the operand is not the last element of the array, push it into the storage array
                storage.push([el]);
            }
        }
    }
    
    console.log(storage, 'im storage');
    let expressionArray = [];

    for (let i = 0; i < storage.length; i++) {
        expressionArray.push(storage[i].join(""));
    }

    console.log(expressionArray, 'im expression array');
}

export default calculateFromString;