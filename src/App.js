import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle/>
       <Navbar/>
       <Routes>
        <Route path='/' exact Component={Home}/>
       </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
