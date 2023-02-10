import './App.css';
import Nav from './component/navbar/navbar.jsx'
import Hero from './component/hero/hero.jsx';
import Shopbycategories from './component/categories/categories.jsx'
function App() {
  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <Shopbycategories/>
    </div>
  );
}

export default App;
