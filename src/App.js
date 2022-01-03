
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router'
import Home from './pages/Home';
import SearchName from './pages/SearchName';
import SearchLetter from './pages/SearchLetter';
import Cocktail from './pages/Cocktail.jsx';
import SearchProvider from './context/Search';
import Footer from './pages/Footer';
import FilterCategories from './pages/FilterCategories';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fab)

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
            path="/filter_by_categories"
            element={<FilterCategories />}
          />
          <Route
            path="/cocktail/:id"
            element={<Cocktail />}
          />
        </Routes>
      </SearchProvider>
      <Footer class="mt-auto" />
    </BrowserRouter>
  );
}

export default App;
