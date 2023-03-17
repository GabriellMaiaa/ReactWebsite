import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
       <Navbar/>
       <Routes>
        <Route path='/' exact Component={Home}/>
       </Routes>
    </Router>
  );
}

export default App;
