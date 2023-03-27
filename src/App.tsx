import './App.scss';
import Card from './components/Card/index';
import Header from './components/Header/index';
// import Disclaimer from './components/Disclaimer';
import BoardContainer from './components/BoardContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="description">
        <div className="col1">
        Welcome to our Credit Card Number Generator for testing purposes. 
        This website is designed to provide developers and testers with valid, 
        but fake credit card numbers for use in software development, testing, and quality assurance. 
        Please note that these credit card numbers are <strong>NOT REAL</strong> and should not be used for any illegal activities or unauthorized transactions.
        </div>
        <div className="col2"><Card /></div>
      </div>
      <div>
        
      </div>
      <div>
        <BoardContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
