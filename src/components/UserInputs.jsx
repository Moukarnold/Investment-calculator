import React, { useState } from "react";


function UserIputs(props){

 const initialUserInputs= {
  "current-savings": 0 ,
  "yearly-contribution":0,
  "expected-return": 0 ,
  "duration": 0

 };

   const [ userInput, setUserInput] = useState (initialUserInputs);
  
 
   function handleSubmit(event){
    event.preventDefault();

     props.onCalculate(userInput);
   }

   function handleReset(){
    setUserInput(initialUserInputs);
   }

   function handleChange(event){
      const { id, value } = event.target;

      const numericValue = parseFloat(value);

      if (isNaN(numericValue) || numericValue < 0) {
        return;
      }

      setUserInput((prevUserInput) => ({
        ...prevUserInput,
        [id]: numericValue,
      }));
  }

return <div>
<form  onSubmit ={handleSubmit}className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange ={handleChange} type="number" id="current-savings" value= {userInput["current-savings"]} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange ={handleChange} type="number" id="yearly-contribution"  value={userInput["yearly-contribution"]}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange ={handleChange} type="number" id="expected-return" value={userInput["expected-return"]} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange ={handleChange} type="number" id="duration" value={userInput["duration"]} />
          </p>
        </div>
        <p className="actions">
          <button onClick= {handleReset}type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
      </div>

};

export default UserIputs;