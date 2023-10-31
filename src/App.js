import logo from './assets/investment-calculator-logo.png';
import UserIputs from './components/UserInputs';
import ResultTable from './components/ResultTable';


function App() {
  

  

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
       
       <UserIputs/>
      
       <ResultTable/>

      
    </div>
  );
};

export default App;