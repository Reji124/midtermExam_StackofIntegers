import React, { useState } from 'react';

function Stack() {

  const [stack, setStack] = useState([]);

  const handlePush = (value) => {
    if (isNaN(value)) {
      alert('Please enter a valid number');
      return;
    }
    const newStack = createNewStack(stack, value);
    setStack(newStack);
  };

  const createNewStack = (oldStack, value) => {
    const newStack = new Array(oldStack.length + 1);
    for (let i = 0; i < oldStack.length; i++) {
      newStack[i + 1] = oldStack[i];
    }
    newStack[0] = value;
    return newStack;
  };
  //this is the method for the Push button for creating a stack where an input is directly placed as the top value of the stack and i have set it
  //where a new input will be the newStack then adds the length of the oldStack for every newStack inputted. I also added an alert if input is string value.


  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty');
      return;
    }
    const newStack = removeTopValue(stack);
    setStack(newStack);
  };

  const removeTopValue = (oldStack) => {
    if (oldStack.length === 0) return [];
    const newStack = new Array(oldStack.length - 1);
    for (let i = 0; i < oldStack.length - 1; i++) {
      newStack[i] = oldStack[i + 1];
    }
    return newStack;
  };
  //this is the method for the Pop button to remove the top value of the stack where the function creates a new stack 
  //then copies the same elements minus one which is the top value
  // also added an alert if stack is empty


  return (
    <div className="stack-container">
      <h2>Stack of Integers</h2>
      <div>
        <input type="number" id="inputValue" className="stack-input" />
        <button
          className="stack-button"
          onClick={() => {
            const value = parseInt(document.getElementById('inputValue').value);
            handlePush(value);
          }}
        >
          Push
        </button>
        <button
          className="stack-button"
          onClick={handlePop}
        >
          Pop
        </button>
      </div>
      <div className="stack-table-container">
        <table className="stack-table">
          <tbody>
            {stack.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
    //The stack table is where the inputs display is. i created some css in the global.css 
    //Robert John Aguio BSIT-2C :)
  );
}

export default Stack;
