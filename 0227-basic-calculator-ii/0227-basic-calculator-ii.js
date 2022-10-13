/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const operatorStack = [];
    const operandStack = [];
    const Precedence = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1,
    };
    
    const evaluate = (firstOperand, secondOperand, operator) => {
        if (operator === "+") {
            return firstOperand + secondOperand;
        } else if (operator === "-") {
            return firstOperand - secondOperand;
        } else if (operator === "*") {
            return firstOperand * secondOperand;
        } else if (operator === "/") {
            return Math.floor(firstOperand / secondOperand);
        }
    }
    
    // evaluate expression
    let currentNumberStr = "";
    for (let ii=0; ii<s.length; ii++) {
        const currentChar = s.charAt(ii);
        if (!Number.isNaN(Number.parseInt(currentChar))) {
            currentNumberStr = `${currentNumberStr}${currentChar}`;
        } else {
            // we push the previous number (operand) to stack; handling multiple digits
            const currentNumber = Number.parseInt(currentNumberStr);
            if (!Number.isNaN(currentNumber)) {
                operandStack.push(currentNumber);
                currentNumberStr = "";
            }
            
            if (["+", "-", "*", "/"].includes(currentChar)) {
                // if stack is empty, push the operator into the stack
                if (operatorStack.length === 0) {
                    operatorStack.push(currentChar);
                } else {
                    let currentOperator = operatorStack.at(-1);
                    // if operator precedence is greater than precendence of top of operator stack, push the operator into the stack
                    // otherwise we pop and evaluate until we found an operator with lower or equal precedence
                    while (Precedence[currentChar] <= Precedence[currentOperator] && operatorStack.length > 0) {
                        operatorStack.pop();
                        const secondOperand = operandStack.pop();
                        const firstOperand = operandStack.pop();
                        const evaluationResult = evaluate(firstOperand, secondOperand, currentOperator);
                        operandStack.push(evaluationResult);
                        currentOperator = operatorStack.at(-1);
                    }
                    operatorStack.push(currentChar);
                }
                
            }
        }
    }
    const currentNumber = Number.parseInt(currentNumberStr);
    if (!Number.isNaN(currentNumber)) {
        operandStack.push(currentNumber);
        currentNumberStr = "";
    }
    
    // now we process the remaining operators & operand
    while (operatorStack.length > 0) {
        const currentOperator = operatorStack.pop();
        const secondOperand = operandStack.pop();
        const firstOperand = operandStack.pop();
        operandStack.push(evaluate(firstOperand, secondOperand, currentOperator));
    }
    
    return operandStack.pop();
};