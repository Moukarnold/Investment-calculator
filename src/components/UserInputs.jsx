import React, { useState } from "react";


function UserIputs(){

 const initialUserInputs= {
  "current-savings": 2 ,
  "yearly-contribution":4,
  "expected-return": 3 ,
  "duration": 1

 };

   const [ userInput, setUserInput] = useState (initialUserInputs);
  
 
   function handleSubmit(event){
    event.preventDefault();
   }
   function handleReset(){
    setUserInput(initialUserInputs);
   }

   function handleChange(event){
      const { id, value } = event.target;

      setUserInput( (prevUserInput)=> ({
         ...prevUserInput,
         [id]: value,

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