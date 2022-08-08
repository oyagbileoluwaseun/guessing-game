//import logo from './logo.svg';
import "./App.css";
import Footer from "./features/components/Footer";
import Header from "./features/components/Header";
import Guess from "./features/guess/Guess";

function App() {
  return (
    <div className="App">
      <Header />
      <Guess />
      <Footer />
    </div>
  );
}

export default App;
