import logo from './assets/investment-calculator-logo.png';
import UserIputs from './components/UserInputs';
import ResultTable from './components/ResultTable';
import React, { useState } from "react";


function App() {
  const [ userInput, setUserInput] = useState ();

      // Should be triggered when form is submitted
  const calculateHandler = (userInput) => {
setUserInput(userInput);
};

    const yearlyData = []; // per-year results

if (userInput){ 


    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
       
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }
    };

  
  

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
       
       <UserIputs onCalculate={calculateHandler} />
      
       {userInput && <ResultTable data={yearlyData}  initialInvestment={userInput["current-savings"]}/>}

      
    </div>
  );
};

export default App;