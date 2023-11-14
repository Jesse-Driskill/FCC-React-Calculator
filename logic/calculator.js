
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

    //Pop operands at end of array
    while(operands[arr[arr.length - 1]] === true) {
        arr.pop();
    }

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
            if (currentArray.length > 0) {
                storage.push(currentArray);

            }
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

    for (let i = 0; i < expressionArray.length; i++) {
        let el = expressionArray[i];
        if (operands[el] === undefined) {
            expressionArray[i] = parseFloat(el);
        }
    }

    console.log(expressionArray, 'expression array after float conversion');

    if (expressionArray[0] === "-") {
        expressionArray.shift();
        expressionArray[0] = -expressionArray[0];
    }

    //evaluate negative numbers
    //[1,+,3,+,-,6]
    // 0 1 2 3 4 5
    for (let i = 0; i < expressionArray.length - 1; i++) {
        let el = expressionArray[i];
        let el2 = expressionArray[i-1];

        if (operands[el2] === true && el === "-") {
            // if (i !== expressionArray.length - 1) {
            //     expressionArray[i+1] = -expressionArray[i+1];
            // }
            expressionArray[i+1] = -expressionArray[i+1];
            expressionArray = expressionArray.slice(0,i).concat(expressionArray.slice(i+1, expressionArray.length))
        }
    }

    
    //evaluate multiplication and division first from left to right
    for (let i = 0; i < expressionArray.length; i++) {
        let el = expressionArray[i];
        let resolvedExpression;
        if (el === "*" || el === "/") {
            let num1 = expressionArray[i-1];
            let num2 = expressionArray[i+1];
            if (el === "*") {
                resolvedExpression = num1 * num2;
            } else {
                resolvedExpression = num1 / (num2 * 1.0);
            }

            expressionArray = expressionArray.slice(0, i-1).concat([resolvedExpression]).concat(expressionArray.slice(i+2, expressionArray.length));
            console.log(expressionArray, 'after multiplication/division forloop')
            i -= 1;
        }
    }


    //next evaluate addition and subtraction
    for (let i = 0; i < expressionArray.length; i++) {
        let el = expressionArray[i];
        let resolvedExpression;
        if (el === "+" || el === "-") {
            let num1 = expressionArray[i-1];
            let num2 = expressionArray[i+1];
            if (el === "+") {
                resolvedExpression = num1 + num2;
            } else {
                resolvedExpression = num1 - num2;
            }

            expressionArray = expressionArray.slice(0, i-1).concat([resolvedExpression]).concat(expressionArray.slice(i+2, expressionArray.length));
            console.log(expressionArray, 'after addition/subtraction forloop')
            i -= 1;
        }
    }

    return expressionArray[0];
}

export default calculateFromString;