import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Starred from './pages/Starred';

const NotFoundPage = () => {
  return <div>This is 404 Page</div>;
};

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />

        {/* Define the 404 Page with a wildcard path */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

