// import './App.css';
import { Component, component } from "react";

function App() {
  return (
    <div className="App">
      <Header/>
     <h1>hello world</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque enim ab 
      dolorem nam ad? Vel delectus sequi voluptatem dignissimos.</p>
      <Footer/>
    </div>
    
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

//class component tidak disarankan 
class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &scopy; 2024 Developed by Muhammad firdaus</h3>
        <span>Make with ❤️</span>
      </footer>
    );
  }
}

export default App;


