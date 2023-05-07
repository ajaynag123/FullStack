
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import Header from './Header';
import About from "./About";
import Category from './Category';

function App() {
  return (
    <div className="app">

      <Header />
      <Routes>
        <Route path='/' element={<Home title='Welecome to Red30 Tech' />} />
        <Route path='about' element={<About />} />
        <Route path='categories' element={<Categories />} >
          <Route path='category' element={<Category />} />
        </Route>
        <Route path='*' element={<h1 className='not-found'>Page Not Found!</h1>} />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
