
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router'
import Home from './pages/Home';
import SearchName from './pages/SearchName';
import SearchLetter from './pages/SearchLetter';

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
