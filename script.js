const operator =prompt('Enter operator:(+, -, /, *)')
const num1 = parseInt(prompt('Enter a number'));
const num2= parseInt(prompt('Enter another number'));

let output;

if(isNaN(num1) || isNaN(num2)){
    alert('Invalid Input, Please Input a number')
}else{
if (operator === '+') {
    const output = num1 + num2;
    alert(output);
    document.write(`${num1} ${operator} ${num2} = ${output}`);
}
else if(operator === '-') {
    const output = num1 - num2;
    alert(output);
    document.write(`${num1} ${operator} ${num2} = ${output}`);
}
else if(operator === '/') {
    const output = num1 / num2;
    alert(output);
    document.write(`${num1} ${operator} ${num2} = ${output}`)
}
else if(operator === '*') {
    const output = num1 * num2;
    alert(output);
    document.write(`${num1} ${operator} ${num2} = ${output}`)
}

}