
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router'
import Home from './pages/Home';
import SearchName from './pages/SearchName';
import SearchLetter from './pages/SearchLetter';
import Cocktail from './pages/Cocktail.jsx';
import SearchProvider from './context/Search';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/search_by_name"
            element={<SearchName />}
          />
          <Route
            path="/search_by_letter"
            element={<SearchLetter />}
          />
          <Route
            path="/cocktail/:id"
            element={<Cocktail />}
          />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
