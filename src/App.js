import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle/>
       <Navbar/>
    </Router>
  );
}

export default App;
