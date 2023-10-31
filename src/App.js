import logo from './assets/investment-calculator-logo.png';
import Forms from './components/Forms';
import Screening from './components/Screening';


function App() {
 

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
       
       <Forms/>
      
       <Screening/>

      
    </div>
  );
}

export default App;